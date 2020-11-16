const mongoose = require("mongoose");
const validator = require("validator");
const Comment = require("./commentModel");
const Like = require("./likeModel");

const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "user must have a name"],
    minlength: [3, "Must have a name greater than 3"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "User must have a email"],
    validate: [validator.isEmail, "Provide A valid email"],
    unique: [true, "this email is already exists"],
    lowercase: true,
  },
  password: {
    type: String,
    minlength: [8, "Password must be greater than 8"],
    required: [true, "Please enter your password"],
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please Confirm Your Password"],
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      message: "Confirm Password Must Be same as Password",
    },
  },
  role: {
    type: String,
    default: "user",
    enum: ["admin", "user"],
  },
  passwordChangeAt: Date,
  photo: {
    type: String,
    default: "default.jpeg",
  },
  bookmarks: [{ type: mongoose.Schema.ObjectId, ref: "Anime" }],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre(/^find/, function (next) {
  this.populate({
    path: "bookmarks",
    select: "title image_url description",
  });
  next();
});

//Document MiddleWare
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || this.isNew) return next();
  this.passwordChangeAt = Date.now() - 1000;
  next();
});

//Query Middleware
userSchema.pre("findOneAndDelete", async function (next) {
  this.data = await this.findOne();
  await Comment.deleteMany({ user: this.data._id });
  await Like.deleteMany({ user: this.data._id });
  await next();
});

//Instance Method

userSchema.methods.checkPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.checkPasswordChange = async function (tokenGotAt) {
  if (!this.passwordChangeAt) return false;

  const timestamp = parseInt(this.passwordChangeAt.getTime() / 1000, 10);
  return tokenGotAt < timestamp;
};

module.exports = User = mongoose.model("User", userSchema);
