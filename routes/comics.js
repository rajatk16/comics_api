const express = require('express');
const router = express.Router();

const {
  getComics,
  getComic,
  getComicHeroes,
  createComic,
  updateComic,
  deleteComic
} = require('../controllers/comics')

router.get('/', getComics)

router.get('/:id', getComic)

router.get('/:id/heroes', getComicHeroes)

router.post('/', createComic)

router.put('/:id', updateComic)

router.delete('/:id', deleteComic)

module.exports = router