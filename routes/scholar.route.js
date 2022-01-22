const express = require('express');
const scholarController = require('../controllers/scholar.controller')
const asyncHandler = require('../middleware/asyncHandler');

const router = express.Router();

router.get('/', asyncHandler(scholarController.getAllScholar));
router.post('/applyToScholarship/:scholarshipId', asyncHandler(scholarController.applyToScholarship));



module.exports = router;