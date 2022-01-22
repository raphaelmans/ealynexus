const express = require('express');
const scholarshipController = require('../controllers/scholarship.controller')
const asyncHandler = require('../middleware/asyncHandler');

const router = express.Router();

router.get('/', asyncHandler(scholarshipController.getAllScholarship));
router.get('/:id', asyncHandler(scholarshipController.getScholarship));
router.post('/create', asyncHandler(scholarshipController.createScholarship));



module.exports = router;