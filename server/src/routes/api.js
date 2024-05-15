const express = require('express')

const donationsRouter = require('./donations/donations.router')
const usersRouter = require('./users/users.router')
const causesRouter = require('./causes/causes.router')
const eventsRouter = require('./events/events.router')

const api = express.Router()

api.use('/donations', donationsRouter)
api.use('/users', usersRouter)
api.use('/causes', causesRouter)
api.use('/events', eventsRouter)

module.exports = api