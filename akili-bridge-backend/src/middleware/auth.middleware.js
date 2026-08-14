const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/env');
const logger = require('../utils/logger');

const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        success: false, 
        message: 'Authentication required. No token provided.' 
      });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    logger.error('Authentication failed:', error.message);
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        success: false, 
        message: 'Token expired. Please login again.' 
      });
    }
    
    return res.status(401).json({ 
      success: false, 
      message: 'Invalid token. Authentication failed.' 
    });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Authentication required.' 
      });
    }

    if (req.user.role !== 'admin') {
      return res.status(403).json({ 
        success: false, 
        message: 'Access denied. Admin privileges required.' 
      });
    }

    next();
  } catch (error) {
    logger.error('Admin check failed:', error.message);
    return res.status(500).json({ 
      success: false, 
      message: 'Error verifying admin privileges.' 
    });
  }
};

module.exports = {
  authenticate,
  isAdmin,
};