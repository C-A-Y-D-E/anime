const AppError = require("../utils/AppError");
/* Development Error */
////////////////
const sendErrorDev = (err, res) => {
  return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

//////////////////

/* PRoduction Error */
////////////////
const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "fail";

  if (process.env.NODE_ENV === "development") {
    return sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = err;
    if (err.name === "CastError") error = handleCastError(err);
    if (err.code === 11000) error = handleDuplicateError(err);
    if (err.name === "ValidationError") error = handleValidationError(err);
    if (err.name === "JsonWebTokenError") error = handleTokenErr();
    if (err.name === "TokenExpiredError") error = handleExpiredTokenErr();

    sendErrorProd(error, res);
  }
};

const handleCastError = (err) => {
  const message = `Invalid ${err.path} : ${err.value}`;
  return new AppError(message, 400);
};
const handleDuplicateError = (err) => {
  const message = `${Object.keys(err.keyValue)} is already exist`;
  return new AppError(message, 400);
};
const handleValidationError = (err) => {
  let error = Object.values(err.errors).map((err) => err.message);
  const message = `Invalid Input Data ${error.join(". ")}`;
  return new AppError(message, 400);
};
const handleTokenErr = () =>
  new AppError("Invalid token, Please login again", 401);

const handleExpiredTokenErr = () =>
  new AppError("Token Expired, Please login again", 401);
