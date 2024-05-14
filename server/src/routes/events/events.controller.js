const { getAllEvents, getSingleEvent, createEvent, updateEvent, deleteEvent } = require('../../models/events/events.model')
const events = require('../../models/events/events.mongo')

async function httpGetAllEvents(req, res) {
    const events = await getAllEvents()
    try {
        return res.status(200).json(events)
    } catch (err) {
        return res.status(500).json(err)
    }
}

async function httpGetSingleEvent(req, res) {
    try {
        const eventID = req.params.id
        const searchedEvent = await getSingleEvent(eventID)
        return await res.status(200).json(searchedEvent)
    } catch (err) {
        return res.status(500).json(err)
    }
}

async function httpCreateEvent(req, res) {
    try {
        const savedEvent = await createEvent(req.body)
        return res.status(201).json(savedEvent)
    } catch (err) {
        return res.status(500).json(err)
    }
}

async function httpUpdateEvent(req, res) {
    if (!req.body._id) {
        res.status(500).json({ msg: "provide an Event _id" })
    }
    try {
        const updatedEvent = await updateEvent(req.body)
        return res.status(200).json(updatedEvent)
    } catch (err) {
        return res.status(500).json(err)
    }
}

async function httpDeleteEvent(req, res) {
    if (!req.body._id) {
        res.status(500).json({ msg: "provide an Event _id" })
    }
    try {
        await deleteEvent(req.body)
        return res.status(200).json("Event has been deleted")
    } catch (err) {
        return res.status(500).json(err)
    }
}

module.exports = {
    httpGetAllEvents,
    httpGetSingleEvent,
    httpCreateEvent,
    httpUpdateEvent,
    httpDeleteEvent
}