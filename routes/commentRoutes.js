const router = require("express").Router({ mergeParams: true });
const {
  getAllComments,
  postComment,
  getComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

const setAnimeAndUserId = require("../utils/setAnimeAndUserId");
const { checkAuth, permitOnly } = require("../controllers/authController");
router.use(checkAuth);
router.route("/").get(getComment).post(setAnimeAndUserId, postComment);

router.get("/all", getAllComments);
router
  .route("/:id")
  .patch(permitOnly("admin", "user"), updateComment)
  .delete(permitOnly("admin", "user"), deleteComment);
module.exports = router;
