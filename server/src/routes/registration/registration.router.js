const express = require('express')
const { registration } = require('./registration.controller')

const registrationRouter = express.Router()

registrationRouter.post('/', registration)

module.exports = registrationRouter