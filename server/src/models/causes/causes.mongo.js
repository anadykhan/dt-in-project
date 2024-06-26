const mongoose = require('mongoose')

const causesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    titleContent: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    descriptionPoints: {
        type: [String],
        required: true
    },
    collected: {
        type: Number,
        required: true,
        default: 0
    },
    goal: {
        type: Number,
        required: true
    },
    cardDetail: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true,
        default: 0
    },
    donators: {
        type: [String],
    }
});

module.exports = mongoose.model('Cause', causesSchema)