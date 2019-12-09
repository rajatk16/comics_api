const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config({
  path: './config/config.env'
});

const comics = require('./routes/comics');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use('/api/v1/comics', comics);

connectDB();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} and listening at ${PORT}`
  );
});

process.on('unhandledRejection', (error, promise) => {
  console.log(`ERROR: ${error.message}`);
  server.close(() => {
    process.exit(1)
  })
})