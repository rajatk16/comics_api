const Comic = require('../models/Comic');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/ErrorResponse');

// @desc    get all comics
// @route   GET /api/v1/comics
// @access  Public
exports.getComics = asyncHandler(async (req, res, next) => {
  const comics = await Comic.find();
  res.status(200).json({
    success: true,
    data: comics
  });
})

// @desc    get a comic
// @route   GET /api/v1/comics/:id
// @access  Public
exports.getComic = asyncHandler(async (req, res, next) => {
  const comic = await Comic.findById(req.params.id);
  if (!comic) {
    return next(
      new ErrorResponse(
        `Comic with id ${req.params.id} not found`
      )
    )
  }
  res.status(200).json({
    success: true,
    data: comic
  });
})

// @desc Create New Comic
// @route POST /api/v1/comics
// @access Private
exports.createComic = asyncHandler(async (req, res, next) => {
  const comic = await Comic.create(req.body)
  if (!comic) {
    return next(
      new ErrorResponse(
        `Comic with id ${req.params.id} not found`
      )
    )
  }
  res.status(200).json({
    success: true,
    msg: "Create new comic"
  })
})

// @desc Update Comic with id
// @route PUT /api/v1/comics/:id
// @access Private
exports.updateComic = asyncHandler(async (req, res, next) => {
  const comic = await Comic.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
  if (!comic) {
    return next(
      new ErrorResponse(
        `Comic with id ${req.params.id} not found`
      )
    )
  }
  res.status(200).json({
    success: true,
    data: comic
  })
})

// @desc Delete Comic with id
// @route DELETE /api/v1/comic/:id
// @access PRIVATE
exports.deleteComic = asyncHandler(async (req, res, next) => {
  const comic = await Comic.findByIdAndDelete(req.params.id);
  if (!comic) {
    return next(
      new ErrorResponse(
        `Comic with id ${req.params.id} not found`
      )
    )
  }
  res.status(200).json({
    success: true
  })
})