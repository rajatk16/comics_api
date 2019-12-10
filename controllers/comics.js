const Comic = require('../models/Comic');
const ErrorResponse = require('../utils/ErrorResponse');

// @desc    get all comics
// @route   GET /api/v1/comics
// @access  Public
exports.getComics = async (req, res, next) => {
  try {
    const comics = await Comic.find();
    res.status(200).json({
      success: true,
      data: comics
    });
  } catch (error) {
    next(error);
  }
}

// @desc    get a comic
// @route   GET /api/v1/comics/:id
// @access  Public
exports.getComic = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error)
  }
}

// @desc Create New Comic
// @route POST /api/v1/comics
// @access Private
exports.createComic = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
}

// @desc Update Comic with id
// @route PUT /api/v1/comics/:id
// @access Private
exports.updateComic = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error)
  }
}

// @desc Delete Comic with id
// @route DELETE /api/v1/comic/:id
// @access PRIVATE
exports.deleteComic = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
}