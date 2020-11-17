const AppError = require("../utils/AppError");
const Anime = require("../models/animeModel");
const handleFactory = require("../controllers/handleFactory");
const AsyncCatch = require("../utils/AsyncCatch");

exports.getAllAnime = handleFactory.getAll(Anime);
exports.getAnime = handleFactory.getOne(Anime, "episodes");

exports.postAnime = handleFactory.createOne(Anime);
exports.updateAnime = handleFactory.updateOne(Anime);
exports.deleteAnime = handleFactory.deleteOne(Anime);

exports.mustWatch = AsyncCatch(async (req, res, next) => {
  const animes = await Anime.find({
    $or: [
      { _id: "5f68a936e010ce4e10fdf410" },
      { _id: "5f68a936e010ce4e10fdf413" },
      { _id: "5f68a936e010ce4e10fdf415" },
      { _id: "5f68a936e010ce4e10fdf41e" },
      { _id: "5f68a936e010ce4e10fdf41d" },
    ],
  }).select("title image_url description cover_url");
  return res.status(200).json({
    status: "success",
    data: animes,
  });
});
exports.ratedAnimes = AsyncCatch(async (req, res, next) => {
  const rated = await Anime.find({ rating: { $gte: 8.5 } });
  return res.status(200).json({
    status: "success",
    data: rated,
  });
});

exports.popularAnimes = AsyncCatch(async (req, res, next) => {
  const popular = await Anime.find({
    $or: [
      { _id: "5f68a936e010ce4e10fdf410" },
      { _id: "5f68a936e010ce4e10fdf411" },
      { _id: "5f68a936e010ce4e10fdf414" },
      { _id: "5f68a936e010ce4e10fdf417" },
      { _id: "5f68a936e010ce4e10fdf41a" },
      { _id: "5f68a936e010ce4e10fdf41c" },
    ],
  });

  return res.status(200).json({
    status: "success",
    data: popular,
  });
});

exports.getAnimeStats = AsyncCatch(async (req, res, next) => {
  const anime = await Anime.aggregate([
    { $unwind: "$category" },
    {
      $group: {
        _id: "$category",
        totalAnime: { $sum: 1 },
      },
    },
    { $sort: { totalAnime: -1 } },
  ]);
  return res.status(200).json({
    status: "success",
    stats: anime,
  });
});
