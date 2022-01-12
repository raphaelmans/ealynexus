const express = require('express');
const auth = require('../controllers/auth.controller');
const asyncHandler = require('../middleware/asyncHandler');

const router = express.Router();


router.post('/register',asyncHandler(auth.registerUser));
router.post('/login',asyncHandler(auth.loginUser))

module.exports = router;