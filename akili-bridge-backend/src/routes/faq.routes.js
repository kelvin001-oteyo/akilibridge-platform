const express = require('express');
const router = express.Router();
const faqController = require('../controllers/faq.controller');
const { authenticate, isAdmin } = require('../middleware/auth.middleware');
const { validateRequest, schemas } = require('../middleware/validateRequest');

// Public routes - GET
router.get('/', faqController.getAllFaqs);
router.get('/:id', faqController.getFaqById);

// Admin routes - POST, PUT, DELETE
router.post('/', authenticate, isAdmin, validateRequest(schemas.faqCreate), faqController.createFaq);
router.put('/:id', authenticate, isAdmin, validateRequest(schemas.faqUpdate), faqController.updateFaq);
router.delete('/:id', authenticate, isAdmin, faqController.deleteFaq);

module.exports = router;