const express = require('express')

const donationsRouter = require('./donations/donations.router')
const usersRouter = require('./users/users.router')
const causesRouter = require('./causes/causes.router')
const eventsRouter = require('./events/events.router')
const loginRouter = require('./login/login.router')
const registrationRouter = require('./registration/registration.router')
const adminsRouter = require('./admins/admins.router')
const currentRouter = require('./current/current.router')
const authenticateToken = require('../authentication/authenticate')
const logoutRouter = require('./logout/logout.router')

const api = express.Router()

api.use('/donations', donationsRouter)
api.use('/users', usersRouter)
api.use('/causes', causesRouter)
api.use('/events', eventsRouter)
api.use('/login', loginRouter)
api.use('/registration', registrationRouter)
api.use('/admins', adminsRouter)
api.use('/current', currentRouter)
api.use('/logout', logoutRouter)

module.exports = api