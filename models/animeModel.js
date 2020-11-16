const mongoose = require("mongoose");
const slugify = require("slugify");
const animeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "anime must have a name"],
      trim: true,
      lowercase: true,
    },
    total_episodes: {
      type: Number,
    },
    rating: {
      type: Number,
      default: 7.5,
      min: [5, "Rating Must Above 5"],
      max: [10, "Raing must not greater than 10"],
    },
    slug: String,
    likes: {
      type: Number,
    },
    comments: {
      type: Number,
    },
    description: {
      type: "String",
      required: true,
      trim: true,
    },
    duration: {
      type: Number,
      required: [true, "Anime must have a duration"],
    },
    category: {
      type: [String],
      required: true,
    },
    image_url: {
      type: String,
      required: [true, "Anime must have a image"],
      required: true,
    },
    cover_url: {
      type: String,
      required: true,
    },
    postedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true }, // show virtual properties when json output
    toObject: { virtuals: true },
  }
);

animeSchema.virtual("episodes", {
  ref: "Episode",
  foreignField: "anime",
  localField: "_id",
});

animeSchema.pre("save", function (next) {
  this.slug = slugify(`${this.title}`, {
    lower: true,
  });
  next();
});

animeSchema.index({ category: 1, rating: 1, slug: 1 });

module.exports = Anime = mongoose.model("Anime", animeSchema);
