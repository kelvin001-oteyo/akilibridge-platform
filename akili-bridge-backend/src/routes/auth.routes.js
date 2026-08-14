const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { validateRequest, schemas } = require('../middleware/validateRequest');

router.post('/login', validateRequest(schemas.login), authController.login);
router.post('/refresh-token', authController.refreshToken);
router.post('/logout', authController.logout);

module.exports = router;