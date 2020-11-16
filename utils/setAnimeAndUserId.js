const setAnimeAndUserId = (req, res, next) => {
  if (!req.body.anime) req.body.anime = req.params.animeId;
  if (!req.body.user) req.body.user = req.user._id;
  next();
};

module.exports = setAnimeAndUserId;
