const express = require('express')
const { logout } = require('./logout.controller')

const logoutRouter = express.Router()

logoutRouter.post('/', logout)

module.exports = logoutRouter