const Comic = require('../models/Comic');
const Hero = require('../models/Hero');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/ErrorResponse');

// @desc    get all comics
// @route   GET /api/v1/comics
// @access  Public
exports.getComics = asyncHandler(async (req, res, next) => {
  let query;

  const reqQuery = {
    ...req.query
  };

  const removeFields = ['select', 'sort', 'page', 'limit'];

  removeFields.forEach(param => delete reqQuery[param]);

  let queryString = JSON.stringify(reqQuery);

  queryString = queryString.replace(/\b(gt|gte|lt|lte|in)\b/g, match => {
    return `$${match}`;
  });

  query = Comic.find(JSON.parse(queryString));

  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query.select(fields);
  }
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query.sort(sortBy);
  } else {
    query.sort('name');
  }
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Comic.countDocuments();
  query.skip(startIndex).limit(limit);

  const comics = await query;

  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit: limit
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit: limit
    };
  }

  res.status(200).json({
    success: true,
    count: comics.length,
    pagination: pagination,
    data: comics
  });
});

// @desc    get a comic
// @route   GET /api/v1/comics/:id
// @access  Public
exports.getComic = asyncHandler(async (req, res, next) => {
  const comic = await Comic.findById(req.params.id);
  if (!comic) {
    return next(new ErrorResponse(`Comic with id ${req.params.id} not found`));
  }
  res.status(200).json({
    success: true,
    data: comic
  });
});

// @desc    GET HEROES of the COMIC
// @route   GET /api/v1/comics/:id/heroes
// @access  Public
exports.getComicHeroes = asyncHandler(async (req, res, next) => {
  const comic = await Comic.findById(req.params.id);
  if (!comic) {
    return next(
      new ErrorResponse(
        `Comic with id ${req.params.id} not found`
      )
    )
  }

  const heroes = await Hero.find({
    name: comic.heroes
  })

  res.status(200).json({
    success: true,
    count: heroes.length,
    data: heroes
  })
})

// @desc Create New Comic
// @route POST /api/v1/comics
// @access Private
exports.createComic = asyncHandler(async (req, res, next) => {
  const comic = await Comic.create(req.body);
  if (!comic) {
    return next(new ErrorResponse(`Comic with id ${req.params.id} not found`));
  }
  res.status(200).json({
    success: true,
    msg: 'Create new comic'
  });
});

// @desc Update Comic with id
// @route PUT /api/v1/comics/:id
// @access Private
exports.updateComic = asyncHandler(async (req, res, next) => {
  const comic = await Comic.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!comic) {
    return next(new ErrorResponse(`Comic with id ${req.params.id} not found`));
  }
  res.status(200).json({
    success: true,
    data: comic
  });
});

// @desc Delete Comic with id
// @route DELETE /api/v1/comic/:id
// @access PRIVATE
exports.deleteComic = asyncHandler(async (req, res, next) => {
  const comic = await Comic.findByIdAndDelete(req.params.id);
  if (!comic) {
    return next(new ErrorResponse(`Comic with id ${req.params.id} not found`));
  }
  res.status(200).json({
    success: true
  });
});