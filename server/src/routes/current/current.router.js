const express = require('express')
const authenticateToken = require('../../authentication/authenticate')
const httpGetCurrentUser = require('./current.controller')

const currentRouter = express.Router()

currentRouter.get('/', httpGetCurrentUser)

module.exports = currentRouter