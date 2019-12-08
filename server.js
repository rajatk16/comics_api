const express = require('express')
const dotenv = require('dotenv').config({
  path: './config/config.env'
})

// Routes: Comics, Heroes, Auth, Users
const app = express();

const comics = require('./routes/comics')

app.use('/api/v1/comics', comics)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} and listening at ${PORT}`)
})