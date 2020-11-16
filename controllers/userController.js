const AsyncCatch = require("../utils/AsyncCatch");
const multer = require("multer");
const sharp = require("sharp");
const AppError = require("../utils/AppError");
const handleFactory = require("../controllers/handleFactory");
const User = require("../models/userModel");
// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/img/user");
//   },
//   filename: (req, file, cb) => {
//     console.log(file);
//     const extension = file.mimetype.split("/")[1];
//     cb(null, `user-${req.user._id}-${Date.now()}.${extension}`);
//   },
// });

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    return cb(null, true);
  } else {
    return cb(new AppError("Please upload Image only", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadUserImage = upload.single("photo");

exports.resizeUserImage = (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.user._id}-${Date.now()}.jpeg`;
  sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);

  next();
};

let filterBody = (obj, ...fields) => {
  let newObj = {};
  Object.keys(obj).forEach((el) => {
    if (fields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};
exports.updateMe = AsyncCatch(async (req, res, next) => {
  const filterObj = filterBody(req.body, "name", "email");

  if (req.file) filterObj.photo = req.file.filename;
  const user = await User.findByIdAndUpdate(req.user.id, filterObj, {
    runValidators: true,
    new: true,
  });

  res.status(200).json({
    status: "success",
    user,
  });
});

exports.getMe = AsyncCatch(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({
    status: "success",
    user,
  });
});

exports.getAllUser = AsyncCatch(async (req, res, next) => {
  const users = await User.find({});
  res.status(200).json({
    status: "success",
    users,
  });
});

exports.deleteUser = handleFactory.deleteOne(User);
exports.updateUser = handleFactory.updateOne(User);
