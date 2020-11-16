const express = require("express");
const errorController = require("./controllers/errorController");
const rateLimit = require("express-rate-limit");
const animeRouter = require("./routes/animeRoutes");
const episodeRouter = require("./routes/episodeRoutes");
const userRouter = require("./routes/userRoutes");
const commentRouter = require("./routes/commentRoutes");
const likeRouter = require("./routes/likeRoutes");
const bookmarkRouter = require("./routes/bookmarkRoutes");
const { authorizationCheck } = require("./controllers/authController");
const mongoSanitize = require("express-mongo-sanitize");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const hpp = require("hpp");
const xss = require("xss-clean");
const compression = require("compression");
const path = require("path");
const app = express();
app.use(cors());

const limit = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request  from this IP, please try again after an hour",
});
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "img-src": [
          "'self'",
          "https://i.imgur.com",
          "https://media.giphy.com",
          "https://m.media-amazon.com",
        ],
      },
    },
  })
); // security http
app.use("/public", express.static("public"));
app.use(express.json({ limit: "10kb" })); // body-parser
app.use(mongoSanitize()); // NO SQL query
app.use(xss()); //avoid html and javascript code
app.use(
  // parameter population fix
  hpp({
    whitelist: ["rating"],
  })
);

app.use(compression()); // compress response
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api", limit); // limit request
app.use("/api/v1/animes", animeRouter);
app.use("/api/v1/episodes", episodeRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/authCheck", authorizationCheck);
app.use("/api/v1/like", likeRouter);
app.use("/api/v1/bookmarks", bookmarkRouter);
app.use("/api/v1/users", userRouter);
app.use(errorController);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
module.exports = app;
