const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  // Check if logger exists before using it
  if (logger && logger.error) {
    logger.error('Error:', err.message, { stack: err.stack });
  } else {
    console.error('Error:', err.message);
  }

  // Prisma errors
  if (err.code && err.code.startsWith('P')) {
    return res.status(400).json({
      success: false,
      message: 'Database error occurred.',
      error: err.meta?.cause || err.message,
    });
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      success: false,
      message: 'Invalid token.',
    });
  }

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;