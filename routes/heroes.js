const express = require('express');
const {
  getHeroes,
  getHero,
  postHero,
  updateHero,
  deleteHero
} = require('../controllers/heroes');

const router = express.Router({
  mergeParams: true
});

router.route('/').get(getHeroes).post(postHero);

router.route('/:id').get(getHero).put(updateHero).delete(deleteHero)

module.exports = router;