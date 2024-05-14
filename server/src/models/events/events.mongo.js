const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
    title: {
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
        validate: [arrayLimit, 'At least one description point is required.']
    },
    mission: {
        type: String,
        required: true,
        trim: true
    },
    detail: {
        type: String,
        required: true,
        trim: true
    },
    dateTime: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    }
});

function arrayLimit(val) {
    return val.length > 0;
}

module.exports = mongoose.model('Event', eventsSchema);
