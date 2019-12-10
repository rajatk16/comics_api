const ErrorResponse = require('../utils/ErrorResponse');

const errorHandler = (err, req, res, next) => {
  let error = {
    ...err
  }

  error.message = err.message;

  if (err.name === 'CastError') {
    const message = `Comic with ${err.value} not found`
    error = new ErrorResponse(message, 404);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error"
  })
}

module.exports = errorHandler