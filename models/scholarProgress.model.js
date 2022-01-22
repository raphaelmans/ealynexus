const mongoose = require('mongoose');


const scholarProgressSchema = new mongoose.Schema({
    proof_completion: {
        type: [String],
        default: []
    },
    scholarship_standing: {
        type: Number,
        default: 0,
        min: 0,
    },
})


module.exports = mongoose.model('ScholarProgress', scholarProgressSchema)