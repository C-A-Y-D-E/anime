const router = require("express").Router();
const {
  getAllAnime,
  getAnime,
  postAnime,
  updateAnime,
  deleteAnime,
  getAnimeStats,
  popularAnimes,
  ratedAnimes,
  mustWatch,
  searchAnime,
} = require("../controllers/animeController");

const { checkAuth, permitOnly } = require("../controllers/authController");

const episodeRouter = require("./episodeRoutes");
const commentRouter = require("./commentRoutes");
const likeRouter = require("./likeRoutes");
const bookmarkRouter = require("./bookmarkRoutes");
router.route("/").get(getAllAnime).post(checkAuth, postAnime);

router.get("/popular", popularAnimes);
router.get("/rated", ratedAnimes);
router.get("/must-watch", mustWatch);
router.use("/:animeId/comments", commentRouter);
router.use("/:animeId/episodes", episodeRouter);
router.use("/:animeId/like", likeRouter);
router.use("/:animeId/bookmarks", bookmarkRouter);
router.get("/stats", getAnimeStats);
router.use(checkAuth);
router
  .route("/:id")
  .get(getAnime)
  .patch(permitOnly("admin"), updateAnime)
  .delete(permitOnly("admin"), deleteAnime);

router.use("/:animeId/episodes", episodeRouter);

module.exports = router;
