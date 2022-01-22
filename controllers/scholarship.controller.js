
const ScholarshipService = require('../services/scholarship.service');
const ErrorResponse = require('../utils/errorResponse');

const scholarshipService = new ScholarshipService();

const scholarshipController = {
    createScholarship: async (req, res, next) => {
        const {
            title,
            description,
            payment_type,
            supported_token,
            budget,
            manager,
        } = req.body;

        const scholarshipObj = {
            title,
            description,
            payment_type,
            supported_token,
            budget,
            manager
        }

        const scholarship = await scholarshipService.createScholarship(scholarshipObj)

        res.status(200).json({
            success: true,
            data: scholarship,
        })
    },
    getScholarship: async (req, res, next) => {
        const scholarshipId = req.params.id;

        const scholarship = await scholarshipService.getScholarship(scholarshipId);

        if (!scholarship) {
            throw new ErrorResponse('Scholarship not found', 404);
        }

        res.status(200).json({
            success: true,
            data: scholarship,
        })
    },

    getAllScholarship: async (req, res, next) => {

        const scholarships = await scholarshipService.getAllScholarship();

        res.status(200).json({
            success: true,
            data: scholarships,
        })
    },
};

module.exports = scholarshipController;