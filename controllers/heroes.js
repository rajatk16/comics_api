const ErrorResponse = require('../utils/ErrorResponse');
const Hero = require('../models/Hero');
const Comic = require('../models/Comic');
const asyncHandler = require('../middleware/async');

// @desc    GET HEROES
// @route   GET /api/v1/heroes
// @route   GET /api/v1/comics/:comicId/heroes
// @access  Public
exports.getHeroes = asyncHandler(
  async (req, res, next) => {
    let query = Hero.find();

    const heroes = await query;

    res.status(200).json({
      success: true,
      count: heroes.length,
      data: heroes
    })
  }
);

//@desc   GET HERO with name
//@route  GET /api/v1/heroes/:id
//@access Public
exports.getHero = asyncHandler(
  async (req, res, next) => {
    const hero = await Hero.findById(req.params.id)
    if (!hero) {
      return next(
        new ErrorResponse(`Hero with id ${req.params.id} not found`, 404)
      )
    }
    res.status(200).json({
      success: true,
      data: hero
    })
  }
)

//  @desc POST new Hero
//  @route POST /api/v1/heroes
//  @access Private
exports.postHero = asyncHandler(
  async (req, res, next) => {
    const hero = await Hero.create(req.body);
    if (!hero) {
      return next(
        new ErrorResponse(
          `Hero with name ${req.body.name} could not be created`,
          404
        )
      )
    }
    res.status(201).json({
      success: true,
      data: hero
    })
  }
)

exports.updateHero = asyncHandler(async (req, res, next) => {
  const hero = await Hero.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!hero) {
    return next(
      new ErrorResponse(`Hero with id ${req.params.id} not found`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: hero
  });
});

exports.deleteHero = asyncHandler(async (req, res, next) => {
  const hero = await Hero.findByIdAndRemove(req.params.id);
  if (!hero) {
    return next(
      new ErrorResponse(
        `Hero with id ${req.params.id} not found`,
        404
      )
    )
  }
  res.status(200).json({
    success: true,
    data: hero
  })
})