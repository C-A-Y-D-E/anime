const jwt = require("jsonwebtoken");
const AsyncCatch = require("../utils/AsyncCatch");
const { promisify } = require("util");
const AppError = require("../utils/AppError");
const User = require("../models/userModel");
const Email = require("../utils/email");

//token generater
const signIn = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

//token and response sender
const createTokenSend = (user, statusCode, req, res) => {
  const token = signIn(user._id);
  let cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_EXPIRES * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  };

  res.cookie("jwt", token, cookieOptions); // key,value,options
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: user,
  });
};

//signup
exports.signup = AsyncCatch(async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  const user = await User.create({ name, email, password, confirmPassword });
  const url = `${req.protocol}://${req.get("host")}/user`;

  createTokenSend(user, 200, req, res);
});

//login
exports.login = AsyncCatch(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new AppError("Please Enter Email and Password", 400));

  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.checkPassword(password, user.password)))
    return next(new AppError("Incorrect Email and Password", 400));

  createTokenSend(user, 200, req, res);
});

exports.logout = (req, res) => {
  let cookieOptions = {
    expires: new Date(Date.now() + 2000),
    httpOnly: true,
  };
  res.cookie("jwt", "", cookieOptions);
  res.status(200).json({
    status: "success",
    data: {
      isAuth: false,
      user: {},
    },
  });
};

//check if user logged in or not
exports.checkAuth = AsyncCatch(async (req, res, next) => {
  let token;
  //check if there is header with authorization that have token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token)
    return next(
      new AppError("You are not logged in, login to get access", 401)
    );
  //Verify the user token

  const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const user = await User.findById(decode.id);
  if (!user)
    next(new AppError("The user belonging to this token it not exist", 401));

  //check if changed password after token issued
  if (!user.checkPasswordChange(decode.iat)) {
    return next(new AppError("User Changed Password, Please Login Again", 401));
  }

  //return user for access allow
  req.user = user;
  next();
});

exports.authorizationCheck = AsyncCatch(async (req, res, next) => {
  let token;
  //check if there is header with authorization that have token
  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return res.status(200).json({
      status: "fail",
    });
  }
  //Verify the user token

  const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const user = await User.findById(decode.id).select("-__v");
  if (!user) return next();

  //check if changed password after token issued
  if (!user.checkPasswordChange(decode.iat)) {
    return next();
  }

  //return user for access allow
  res.status(200).json({
    status: "success",
    user,
  });
});

//if user have permission
exports.permitOnly = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return next(new AppError("You're not allowed to use this route", 403));
    next();
  };
};

exports.forgotPassword = AsyncCatch(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return next(new AppError("No User found with this email address", 404));

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.PASSWORD_EXPIRE_JWT,
  });

  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/users/resetpassword/${token}`;

  try {
    await new Email(user, resetUrl).sendResetPassword();
    return res.status(200).json({
      status: "success",
      message: `Password Reset Link send to your email`,
    });
  } catch (error) {
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(
      new AppError("Something Goes Wrong While Sending Email,Try Again", 500)
    );
  }
});

exports.resetPassword = AsyncCatch(async (req, res, next) => {
  console.log(resetToken, "called");
  const { resetToken } = req.params;
  const decode = await promisify(jwt.verify)(
    resetToken,
    process.env.JWT_SECRET
  );

  const user = await User.findOne({
    _id: decode.id,
  });
  console.log(user);
  if (!user) next(new AppError("No User With This Token", 400));
  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  user.resetToken = undefined;
  await user.save();

  createTokenSend(user, 200, req, res);
});

// exports.updateMe = AsyncCatch(async(req,res,next)=>{
//   const user = await User.findByIdAndUpdate(req.user.id,{name})
// })
