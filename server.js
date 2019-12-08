const express = require('express');
const dotenv = require('dotenv').config({
  path: './config/config.env'
});
const morgan = require('morgan');

const comics = require('./routes/comics');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use('/api/v1/comics', comics);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} and listening at ${PORT}`
  );
});
