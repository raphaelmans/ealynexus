const mongoose = require('mongoose');
const ScholarProgress = require('../models/scholarProgress.model');


const scholarProgress = {
    createscholarProgress: () => ScholarProgress.create({}),
}

module.exports = scholarProgress;