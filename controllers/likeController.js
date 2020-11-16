const AsyncCatch = require("../utils/AsyncCatch");
const Like = require("../models/likeModel");
const handleFactory = require("../controllers/handleFactory");
const AppError = require("../utils/AppError");

exports.getLikeByUser = AsyncCatch(async (req, res, next) => {
  const like = await Like.find({
    user: req.user._id,
  });
  if (!like)
    return res.status(200).json({
      status: "success",
      data: null,
    });
  res.status(200).json({
    status: "success",
    data: like,
  });
});
exports.like = AsyncCatch(async (req, res, next) => {
  const { anime, user } = req.body;
  const like = await Like.create({ anime, user });
  res.status(200).json({
    status: "success",
    data: await like
      .populate({ path: "anime", select: "title" })
      .execPopulate(),
  });
});
exports.dislike = AsyncCatch(async (req, res, next) => {
  const { user, anime } = req.body;
  const like = await Like.findOneAndDelete({
    anime,
    user,
  });

  if (!like) return next(new AppError("No like is found to delete", 404));
  res.status(200).json({
    status: "success",
    data: like,
  });
});
