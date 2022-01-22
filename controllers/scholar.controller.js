
const ScholarService = require('../services/scholar.service');
const ErrorResponse = require('../utils/errorResponse');

const ScholarshipService = require('../services/scholarship.service')
const ScholarProgressService = require('../services/scholarProgress.service');

const scholarService = new ScholarService();
const scholarshipService = new ScholarshipService();
const scholarProgressService = new ScholarProgressService();

const scholarController = {
    applyToScholarship: async (req, res, next) => {
        const scholarshipId = req.params.scholarshipId;

        const {
            user, scholarship
        } = req.body;


        const scholarProgress = await scholarProgressService.createscholarProgress();

        console.log(scholarProgress)

        const scholar = await scholarService.createScholar(user, scholarProgress._id, scholarship)

        const scholarshipUpdated = await scholarshipService.insertScholar(scholarshipId,scholar._id);

        res.status(200).json({
            success: true,
            data: scholarshipUpdated,
        })
    },

    getAllScholar: async (req,res,next) =>{

        const scholars = await scholarService.getAllScholar();

        res.status(200).json({
            success: true,
            data: scholars,
        })
    }
};

module.exports = scholarController;