const AsyncCatch = require("../utils/AsyncCatch");
const AppError = require("../utils/AppError");
const ApiFeatures = require("../utils/apiFeatures");
exports.getAll = (Model) =>
  AsyncCatch(async (req, res, next) => {
    let filter = {};
    if (req.params.animeId) filter = { anime: req.params.animeId };
    const features = new ApiFeatures(Model.find(filter), req.query)
      .search()
      .sort()
      .fields()
      .paginate();

    const doc = await features.query;
    if (!doc.length > 0) {
      return res.status(200).json({
        status: "success",
        data: null,
      });
    }
    res.status(200).json({
      status: "success",
      total: doc.length,
      data: doc,
    });
  });

exports.getOne = (Model, popObs) =>
  AsyncCatch(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popObs)
      query = query.populate({
        path: popObs,
        options: { sort: { "episode_no season": 1 } },
      });
    const doc = await query;
    if (!doc) return next(new AppError("No Anime Found", 404));

    res.status(200).json({
      status: "success",
      data: doc,
    });
  });

exports.createOne = (Model) =>
  AsyncCatch(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json({
      status: "success",
      data: doc,
    });
  });

exports.updateOne = (Model) =>
  AsyncCatch(async (req, res, next) => {
    const { id } = req.params;
    if (req.params.episodeId) id = req.params.episodeId;
    const doc = await Model.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    if (!doc) return next(new AppError("No Document is found to Update", 404));
    res.status(200).json({
      status: "success",
      data: doc,
    });
  });

exports.deleteOne = (Model) =>
  AsyncCatch(async (req, res, next) => {
    const { id } = req.params;
    const doc = await Model.findByIdAndDelete(id);
    if (!doc) return next(new AppError("No Document is found to delete", 404));
    res.status(204).json({
      status: "success",
      data: null,
    });
  });
