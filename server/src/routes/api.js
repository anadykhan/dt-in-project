const express = require('express')

const donationsRouter = require('./donations/donations.router')
const usersRouter = require('./users/users.router')

const api = express.Router()

api.use('/donations', donationsRouter)
api.use('/users', usersRouter)

module.exports = api