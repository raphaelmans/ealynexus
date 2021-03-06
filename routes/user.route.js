const express = require('express');
const user = require('../controllers/user.controller');
const asyncHandler = require('../middleware/asyncHandler');

const router = express.Router();

router.get('/getAllUsers',asyncHandler(user.getAllUsers));
router.get('/getUserByEmail',asyncHandler(user.getUserByEmail));
router.get('/getUserById',asyncHandler(user.getUserById));



module.exports = router;