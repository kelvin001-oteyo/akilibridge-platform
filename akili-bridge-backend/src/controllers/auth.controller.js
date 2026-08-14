const authService = require('../services/auth.service');
const logger = require('../utils/logger');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.loginAdmin(email, password);

    res.json({
      success: true,
      message: 'Login successful',
      data: result,
    });
  } catch (error) {
    logger.error('Login controller error:', error.message);
    res.status(401).json({
      success: false,
      message: error.message || 'Login failed',
    });
  }
};

const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        message: 'Refresh token required',
      });
    }

    const result = await authService.refreshAccessToken(refreshToken);

    res.json({
      success: true,
      message: 'Token refreshed successfully',
      data: result,
    });
  } catch (error) {
    logger.error('Refresh token controller error:', error.message);
    res.status(401).json({
      success: false,
      message: error.message || 'Failed to refresh token',
    });
  }
};

const logout = async (req, res) => {
  res.json({
    success: true,
    message: 'Logged out successfully',
  });
};

module.exports = {
  login,
  refreshToken,
  logout,
};