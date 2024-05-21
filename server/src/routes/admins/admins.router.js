const express = require('express')
const { httpGetAllAdmins, httpGetSingleAdmin, httpCreateAdmin, httpUpdateAdmin, httpDeleteAdmin } = require('./admins.controller')

const adminsRouter = express.Router()

adminsRouter.get('/', httpGetAllAdmins)
adminsRouter.get('/:id', httpGetSingleAdmin)
adminsRouter.post('/', httpCreateAdmin)
adminsRouter.post('/updateadmin', httpUpdateAdmin)
adminsRouter.delete('/', httpDeleteAdmin)

module.exports = adminsRouter