const mongoose = require('mongoose');
const Scholar = require('../models/scholar.model');


const scholarRepository = {
    createScholar: (user,progress,scholarship) => Scholar.create({user,progress,scholarship}),
    getAllScholar: () => Scholar.find({}),
}

module.exports = scholarRepository;