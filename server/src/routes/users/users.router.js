const express = require('express')
const { httpGetAllUsers, httpGetSingleUser, httpCreateUser, httpUpdateUser, httpDeleteUser } = require('./users.controller')

const usersRouter = express.Router()

usersRouter.get('/', httpGetAllUsers)
usersRouter.get('/:id', httpGetSingleUser)
usersRouter.post('/', httpCreateUser)
usersRouter.post('/updateuser', httpUpdateUser)
usersRouter.delete('/', httpDeleteUser)

module.exports = usersRouter