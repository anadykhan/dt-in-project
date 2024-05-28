const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
    startTime: {
        type: String,
        required: true,
        trim: true
    },
    endTime: {
        type: String,
        required: true,
        trim: true
    },
    startDate: {
        type: String,
        required: true,
        trim: true
    },
    startMonth: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    titleContent: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    descriptionPoints: {
        type: [String],
        required: true,
    },
    mission: {
        type: String,
        required: true,
        trim: true
    },
    missionPoints: {
        type: [String],
        required: true,
    }
});

module.exports = mongoose.model('Event', eventsSchema);
