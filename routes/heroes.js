const express = require('express');
const {
  getHeroes,
  getHero,
  postHero
} = require('../controllers/heroes');

const router = express.Router({
  mergeParams: true
});

router.route('/').get(getHeroes).post(postHero);

router.route('/:name').get(getHero);

module.exports = router