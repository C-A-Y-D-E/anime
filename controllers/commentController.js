const handleFactory = require("./handleFactory");
const Comment = require("../models/commentModel");
const AsyncCatch = require("../utils/AsyncCatch");
const AppError = require("../utils/AppError");
exports.getAllComments = handleFactory.getAll(Comment);
exports.postComment = AsyncCatch(async (req, res, next) => {
  const { anime, user, comment } = req.body;
  const com = await Comment.create({ anime, user, comment });
  res.status(200).json({
    status: "success",
    data: await com
      .populate({ path: "user", select: "name photo" })
      .execPopulate(),
  });
});

exports.getComment = AsyncCatch(async (req, res, next) => {
  const comment = await Comment.find({
    user: req.user,
  });
  if (!comment)
    return res.status(200).json({
      status: "success",
      data: null,
    });
  res.status(200).json({
    status: "success",
    data: comment,
  });
});
exports.updateComment = AsyncCatch(async (req, res, next) => {
  const { id } = req.params;
  const user = req.user._id;

  const comment = await Comment.findOneAndUpdate({ _id: id, user }, req.body, {
    runValidators: true,
    new: true,
  });
  if (!comment)
    return next(new AppError("No Document is found to Update", 404));
  res.status(200).json({
    status: "success",
    data: comment,
  });
});
exports.deleteComment = handleFactory.deleteOne(Comment);
