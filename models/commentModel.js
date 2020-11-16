const mongoose = require("mongoose");
const idvalidator = require("mongoose-id-validator");
const Anime = require("./animeModel");
const commentSchema = mongoose.Schema({
  comment: { type: String, required: [true, "must type comment"], trim: true },
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
  anime: {
    type: mongoose.Schema.ObjectId,
    ref: "Anime",
    required: [true, "Must related to anime"],
  },
  commentAt: {
    type: Date,
    default: Date.now(),
  },
});
commentSchema.plugin(idvalidator);

commentSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo",
  });
  next();
});

commentSchema.index({ anime: 1, user: 1 }, { unique: true });

commentSchema.statics.calculateTotalComment = async function (animeId) {
  const total = await this.aggregate([
    {
      $match: { anime: animeId },
    },
    {
      $group: {
        _id: "$anime",
        comments: { $sum: 1 },
      },
    },
  ]);
  if (total.length > 0) {
    await Anime.findByIdAndUpdate(animeId, { comments: total[0].comments });
  }
};

commentSchema.post("save", function () {
  this.constructor.calculateTotalComment(this.anime);
});

commentSchema.pre(/^findOneAnd/, async function (next) {
  this.data = await this.findOne();
  next();
});

commentSchema.post(/^findOneAnd/, async function () {
  await this.data.constructor.calculateTotalComment(this.data.anime);
});

module.exports = Comment = mongoose.model("Comment", commentSchema);
