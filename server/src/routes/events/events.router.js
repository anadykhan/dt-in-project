const express = require('express')
const authenticateToken = require('../../authentication/authenticate')
const httpGetCurrentUser = require('../current/current.controller')
const { httpGetAllEvents, httpGetSingleEvent, httpCreateEvent, httpUpdateEvent, httpDeleteEvent } = require('./events.controller')

const eventsRouter = express.Router()

eventsRouter.get('/', httpGetAllEvents)
eventsRouter.get('/:id', authenticateToken, httpGetSingleEvent)
eventsRouter.post('/', httpCreateEvent)
eventsRouter.post('/updateevent', httpUpdateEvent)
eventsRouter.delete('/', httpDeleteEvent)

module.exports = eventsRouter