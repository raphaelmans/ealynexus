const mongoose = require('mongoose');

const scholarSchema = new mongoose.Schema({
    taskComplete: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    progress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ScholarProgress',
        required: true,
    },
    scholarship: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Scholarship',
        required: true,
    }
})


module.exports = mongoose.model('Scholar',scholarSchema);