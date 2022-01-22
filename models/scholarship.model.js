const mongoose = require('mongoose');

const scholarshipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    payment_type: {
        type: String,
        enum: ['Fixed Pay', 'Pay Per Hour', 'Pay Per Win'],
        required: true,
        trim: true,
    },
    supported_token: {
        type: String,
        enum: ['WETH', 'SLP'],
        required: true
    },
    budget: {
        type: Number,
        min: 0,
        required: true
    },
    scholars: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Scholar'
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

scholarshipSchema.virtual('deposit_amount').get(function(){
    return this.budget / 2;
});

module.exports = mongoose.model('Scholarship', scholarshipSchema);