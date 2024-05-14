const events = require('./events.mongo')

async function getAllEvents() {
    return await events
        .find({})
        .sort({ createdAt: -1 })
}

async function getSingleEvent(eventID) {
    return await events
        .findById(eventID)
}

async function createEvent(event) {
    const newEvent = new events(event)
    await newEvent.save()
}

async function updateEvent(event) {
    await events
        .findByIdAndUpdate(
            event._id,
            {
                $set: event,
            },
            {
                new: true,
            }
        )
}

async function deleteEvent(event) {
    await events
        .findByIdAndDelete(
            event._id
        )
}

module.exports = {
    getAllEvents,
    getSingleEvent,
    createEvent,
    updateEvent,
    deleteEvent
}