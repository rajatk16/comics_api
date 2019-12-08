const express = require('express')
const dotenv = require('dotenv').config({
  path: './config/config.env'
})

// Routes: Comics, Heroes, Auth, Users
const app = express();

app.get('/api/v1/comics', (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'Show all comics'
  });
})

app.get('/api/v1/comics/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Show comic ${req.params.id}`
  })
})

app.post('/api/v1/comics', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Add a new comic`
  });
})

app.put('/api/v1/comics/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Update comic ${req.params.id}`
  })
})

app.delete('/api/v1/comics/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Delete comic ${req.params.id}`
  })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} and listening at ${PORT}`)
})