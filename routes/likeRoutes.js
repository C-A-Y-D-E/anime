const router = require("express").Router({ mergeParams: true });
const {
  like,
  dislike,
  getLikeByUser,
} = require("../controllers/likeController");
const { checkAuth } = require("../controllers/authController");
const setAnimeAndUserId = require("../utils/setAnimeAndUserId");
router.use(checkAuth);
router.get("/", getLikeByUser);
router.post("/", setAnimeAndUserId, like);
router.delete("/", setAnimeAndUserId, dislike);
module.exports = router;
