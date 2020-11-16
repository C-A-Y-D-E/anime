const AsyncCatch = require("../utils/AsyncCatch");
const User = require("../models/userModel");

exports.addBookmark = AsyncCatch(async (req, res, next) => {
  const { anime, user } = req.body;

  const userData = await User.findByIdAndUpdate(
    { _id: user },
    {
      $addToSet: { bookmarks: anime },
    },
    { new: true }
  );
  const bookmarks = userData.bookmarks;

  res.status(200).json({
    status: "success",
    data: bookmarks,
  });
});
exports.deleteBookmark = AsyncCatch(async (req, res, next) => {
  const { user, anime } = req.body;
  const bookmark = await User.findOneAndUpdate(
    { _id: user },
    {
      $pull: { bookmarks: anime },
    }
  );

  if (!bookmark)
    return next(new AppError("No Document is found to delete", 404));
  res.status(204).json({
    status: "success",
    data: null,
  });
});
