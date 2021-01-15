const router = require("express").Router();
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  checkAuth,
  logout,
  permitOnly,
} = require("../controllers/authController");

const {
  updateMe,
  getMe,
  uploadUserImage,
  resizeUserImage,
  getAllUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
router.patch("/resetpassword/:resetToken", resetPassword);
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.post("/forgotpassword", forgotPassword);

router.use(checkAuth);
router.patch("/updateme", uploadUserImage, resizeUserImage, updateMe);
router.get("/", permitOnly("admin"), getAllUser);
router.get("/me", getMe);
router.use(permitOnly("admin"));
router.route("/:id").patch(updateUser).delete(deleteUser);

module.exports = router;
