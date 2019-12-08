// @desc    get all comics
// @route   GET /api/v1/comics
// @access  Public
exports.getComics = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Show all comics'
  });
}

// @desc    get a comic
// @route   GET /api/v1/comics/:id
// @access  Public
exports.getComic = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Show comic ${req.params.id}`
  });
}

// @desc Create New Comic
// @route POST /api/v1/comics
// @access Private
exports.createComic = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Create new comic"
  })
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