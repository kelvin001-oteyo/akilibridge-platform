const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/application.controller');
const { authenticate, isAdmin } = require('../middleware/auth.middleware');
const { uploadFiles } = require('../middleware/upload');

// Public routes
router.post('/submit', uploadFiles, applicationController.submitApplication);

// Admin routes
router.get('/', authenticate, isAdmin, applicationController.getAllApplications);
router.get('/stats', authenticate, isAdmin, applicationController.getApplicationStats);
router.get('/:id', authenticate, isAdmin, applicationController.getApplicationById);
router.put('/:id/status', authenticate, isAdmin, applicationController.updateApplicationStatus);
router.delete('/:id', authenticate, isAdmin, applicationController.deleteApplication);

module.exports = router;