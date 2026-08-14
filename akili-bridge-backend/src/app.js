const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { corsOrigin } = require('./config/env');
const errorHandler = require('./middleware/errorHandler');
const logger = require('./utils/logger');

// Import routes
const authRoutes = require('./routes/auth.routes');
const mentorRoutes = require('./routes/mentors.routes');
const trackRoutes = require('./routes/tracks.routes');
const faqRoutes = require('./routes/faq.routes');

const applicationRoutes = require('./routes/application.routes');

const app = express();

// Security middleware
app.use(helmet());

// CORS
app.use(cors({
  origin: corsOrigin,
  credentials: true,
}));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/applications', applicationRoutes);

// Request logging
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.path}`, { ip: req.ip });
  next();
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'AkiliBridge API is running',
    timestamp: new Date().toISOString(),
  });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/mentors', mentorRoutes);
app.use('/api/tracks', trackRoutes);
app.use('/api/faq', faqRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Error handler - this must be last
app.use(errorHandler);

module.exports = app;