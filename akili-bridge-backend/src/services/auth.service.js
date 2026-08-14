const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../config/prisma');
const { jwtSecret, jwtExpiresIn, refreshTokenExpiresIn } = require('../config/env');
const logger = require('../utils/logger');

const hashPassword = async (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

const comparePassword = async (password, hash) => {
  return bcrypt.compare(password, hash);
};

const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    username: user.username,
    role: user.role,
  };

  const accessToken = jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiresIn });
  const refreshToken = jwt.sign(payload, jwtSecret, { expiresIn: refreshTokenExpiresIn });

  return { accessToken, refreshToken };
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, jwtSecret);
  } catch (error) {
    logger.error('Token verification failed:', error.message);
    return null;
  }
};

const loginAdmin = async (email, password) => {
  try {
    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      throw new Error('Invalid email or password');
    }

    const isPasswordValid = await comparePassword(password, admin.password);
    if (!isPasswordValid) {
      throw new Error('Invalid email or password');
    }

    const tokens = generateToken(admin);
    const { password: _, ...userWithoutPassword } = admin;

    return {
      success: true,
      user: userWithoutPassword,
      ...tokens,
    };
  } catch (error) {
    logger.error('Login error:', error.message);
    throw error;
  }
};

const refreshAccessToken = async (refreshToken) => {
  try {
    const decoded = verifyToken(refreshToken);
    if (!decoded) {
      throw new Error('Invalid refresh token');
    }

    const admin = await prisma.admin.findUnique({
      where: { id: decoded.id },
    });

    if (!admin) {
      throw new Error('Admin not found');
    }

    const tokens = generateToken(admin);
    const { password: _, ...userWithoutPassword } = admin;

    return {
      success: true,
      user: userWithoutPassword,
      ...tokens,
    };
  } catch (error) {
    logger.error('Refresh token error:', error.message);
    throw error;
  }
};

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
  loginAdmin,
  refreshAccessToken,
};