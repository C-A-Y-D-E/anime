const router = require("express").Router({ mergeParams: true });
const {
  updateEpisode,
  postEpisode,
  getAllEpisode,
  deleteEpisode,
  setAnimeId,
} = require("../controllers/episodeController");
const { checkAuth, permitOnly } = require("../controllers/authController");
router.use(checkAuth);
router.route("/").get(getAllEpisode).post(permitOnly("admin"), postEpisode);
router
  .route("/:id")
  .patch(permitOnly("admin"), updateEpisode)
  .delete(permitOnly("admin"), deleteEpisode);
module.exports = router;
