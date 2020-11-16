const router = require("express").Router({ mergeParams: true });
const {
  addBookmark,
  deleteBookmark,
} = require("../controllers/bookmarkController");
const { checkAuth } = require("../controllers/authController");
const setAnimeAndUserId = require("../utils/setAnimeAndUserId");
router.use(checkAuth);
router.post("/", setAnimeAndUserId, addBookmark);
router.delete("/", setAnimeAndUserId, deleteBookmark);

module.exports = router;
