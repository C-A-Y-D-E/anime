const mongoose = require("mongoose");
const Anime = require("./animeModel");
const idvalidator = require("mongoose-id-validator");
const episodeSchema = mongoose.Schema({
  season: {
    type: Number,
    required: [true, "episode must have a seasson"],
  },
  episode_no: {
    type: Number,
    required: [true, "episode no required"],
  },
  description: {
    type: String,
    required: [true, "Episode must have a description"],
  },
  title: {
    type: String,
    required: [true, "episode must have a title"],
  },
  video_url: {
    type: String,
    required: true,
  },
  episode_img: {
    type: String,
    required: true,
  },
  anime: {
    type: mongoose.Schema.ObjectId,
    ref: "Anime",
    required: [true, "episode must belong to any anime"],
  },
  postedAt: {
    type: Date,
    default: Date.now(),
  },
});
episodeSchema.plugin(idvalidator);

episodeSchema.statics.calculateTotalEpisode = async function (animeId) {
  const total = await this.aggregate([
    {
      $match: { anime: animeId },
    },
    {
      $group: {
        _id: "$anime",
        total_episodes: { $sum: 1 },
      },
    },
  ]);

  if (total.length > 0) {
    await Anime.findByIdAndUpdate(animeId, {
      total_episodes: total[0].total_episodes,
    });
  }
};

episodeSchema.post("save", function () {
  this.constructor.calculateTotalEpisode(this.anime);
});

//findByIdAndUpdate
//findByIdAndDelete
//this findbyid is findOneAnd behind the scenes

episodeSchema.pre(/^findOneAnd/, async function (next) {
  this.data = await this.findOne();
  next();
});

episodeSchema.post(/^findOneAnd/, async function () {
  await this.data.constructor.calculateTotalEpisode(this.data.anime);
});

module.exports = Episode = mongoose.model("Episode", episodeSchema);
