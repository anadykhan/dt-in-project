const express = require('express')
const { httpGetAllEvents, httpGetSingleEvent, httpCreateEvent, httpUpdateEvent, httpDeleteEvent } = require('./events.controller')

const eventsRouter = express.Router()

eventsRouter.get('/', httpGetAllEvents)
eventsRouter.get('/:id', httpGetSingleEvent)
eventsRouter.post('/', httpCreateEvent)
eventsRouter.post('/updateevent', httpUpdateEvent)
eventsRouter.delete('/', httpDeleteEvent)

module.exports = eventsRouter