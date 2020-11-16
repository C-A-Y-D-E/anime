const handleFactory = require("./handleFactory");
const Episode = require("../models/episodeModel");
// const AsyncCatch = require("../utils/AsyncCatch");
exports.setAnimeId = (req, res, next) => {
  if (!req.body.anime) req.body.anime = req.params.animeId;
  next();
};
exports.getAllEpisode = handleFactory.getAll(Episode);
exports.postEpisode = handleFactory.createOne(Episode);
exports.updateEpisode = handleFactory.updateOne(Episode);
exports.deleteEpisode = handleFactory.deleteOne(Episode);
