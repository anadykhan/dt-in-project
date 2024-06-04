const express = require('express')
const authenticateToken = require('../../authentication/authenticate')
const { httpGetAllCauses, httpGetSingleCause, httpCreateCause, httpUpdateCause, httpDeleteCause, httpPushDonator } = require('./causes.controller')

const causesRouter = express.Router()

causesRouter.get('/', httpGetAllCauses)
causesRouter.get('/:id', authenticateToken, httpGetSingleCause)
causesRouter.post('/', httpCreateCause)
causesRouter.post('/updatecause', httpUpdateCause)
causesRouter.delete('/', httpDeleteCause)
causesRouter.post('/push-donator', httpPushDonator);

module.exports = causesRouter