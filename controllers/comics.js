const Comic = require('../models/Comic');

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
    res.status(400).json({
      success: false
    })
  }
}

// @desc    get a comic
// @route   GET /api/v1/comics/:id
// @access  Public
exports.getComic = async (req, res, next) => {
  try {
    const comic = await Comic.findById(req.params.id);
    if (!comic) {
      return res.status(400).json({
        success: false
      })
    }
    res.status(200).json({
      success: true,
      data: comic
    });
  } catch (error) {
    res.status(400).json({
      success: false
    })
  }
}

// @desc Create New Comic
// @route POST /api/v1/comics
// @access Private
exports.createComic = async (req, res, next) => {
  try {
    const comic = await Comic.create(req.body)
    res.status(200).json({
      success: true,
      msg: "Create new comic"
    })
  } catch (error) {
    res.status(400).json({
      success: false
    })
  }
}

// @desc Update Comic with id
// @route PUT /api/v1/comics/:id
// @access Private
exports.updateComic = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Update comic ${req.params.id}`
  })
}

// @desc Delete Comic with id
// @route DELETE /api/v1/comic/:id
// @access PRIVATE
exports.deleteComic = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Delete comic ${req.params.id}`
  })
}