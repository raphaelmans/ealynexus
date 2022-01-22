const mongoose = require('mongoose');
const Scholarship = require('../models/scholarship.model');


const scholarshipRepository = {
    createScholarship: (scholarshipObj) => Scholarship.create(scholarshipObj),
    getScholarshipById: (scholarshipId) => Scholarship.findById(scholarshipId),
    getAllScholarship: () => Scholarship.find({}).populate({
        path:'manager'
    }),
    insertScholar: (scholarshipId, scholar) => Scholarship.findByIdAndUpdate(scholarshipId, { "$push": { "scholars": scholar } }, { "new": true })
}

module.exports = scholarshipRepository;