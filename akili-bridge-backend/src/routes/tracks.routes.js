const express = require('express');
const router = express.Router();
const tracksController = require('../controllers/tracks.controller');
const { authenticate, isAdmin } = require('../middleware/auth.middleware');
const { validateRequest, schemas } = require('../middleware/validateRequest');

// Public routes
router.get('/', tracksController.getAllTracks);
router.get('/:id', tracksController.getTrackById);

// Admin routes
router.post('/', authenticate, isAdmin, validateRequest(schemas.trackCreate), tracksController.createTrack);
router.put('/:id', authenticate, isAdmin, validateRequest(schemas.trackUpdate), tracksController.updateTrack);
router.delete('/:id', authenticate, isAdmin, tracksController.deleteTrack);

module.exports = router;