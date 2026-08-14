const express = require('express');
const router = express.Router();
const mentorsController = require('../controllers/mentors.controller');
const { authenticate, isAdmin } = require('../middleware/auth.middleware');
const { validateRequest, schemas } = require('../middleware/validateRequest');

// Public routes - GET
router.get('/', mentorsController.getAllMentors);
router.get('/:id', mentorsController.getMentorById);

// Admin routes - POST, PUT, DELETE
router.post('/', authenticate, isAdmin, validateRequest(schemas.mentorCreate), mentorsController.createMentor);
router.put('/:id', authenticate, isAdmin, validateRequest(schemas.mentorUpdate), mentorsController.updateMentor);
router.delete('/:id', authenticate, isAdmin, mentorsController.deleteMentor);

module.exports = router;