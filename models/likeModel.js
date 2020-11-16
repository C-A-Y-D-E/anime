const mongoose = require("mongoose");
const Anime = require("../models/animeModel");
const likeSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  anime: {
    type: mongoose.Schema.ObjectId,
    ref: "Anime",
  },
  likedAt: {
    type: Date,
    default: Date.now(),
  },
});

likeSchema.statics.calculateTotalLike = async function (animeId) {
  const total = await this.aggregate([
    {
      $match: { anime: animeId },
    },
    {
      $group: {
        _id: "$anime",
        likes: { $sum: 1 },
      },
    },
  ]);
  if (total.length > 0) {
    await Anime.findByIdAndUpdate(animeId, { likes: total[0].likes });
  }
};
likeSchema.pre(/^find/, function (next) {
  this.populate({ path: "anime" });
  next();
});

likeSchema.post("save", function () {
  this.constructor.calculateTotalLike(this.anime);
});

likeSchema.pre(/^findOneAnd/, async function (next) {
  this.data = await this.findOne();
  next();
});

likeSchema.post(/^findOneAnd/, async function () {
  if (this.data) {
    await this.data.constructor.calculateTotalLike(this.data.anime);
  }
});

likeSchema.index({ user: 1, anime: 1 }, { unique: true });
module.exports = Like = mongoose.model("Like", likeSchema);
