const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth');

// @route POST /auth/register
router.post('/register', register);

// @route POST /auth/login
router.post('/login', login);

module.exports = router;
