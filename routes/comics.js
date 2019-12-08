const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'Show all comics'
  });
})

router.get('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Show comic ${req.params.id}`
  })
})

router.post('/', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Add a new comic`
  });
})

router.put('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Update comic ${req.params.id}`
  })
})

router.delete('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Delete comic ${req.params.id}`
  })
})

module.exports = router