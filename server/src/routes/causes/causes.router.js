const express = require('express')
const authenticateToken = require('../../authentication/authenticate')
const { httpGetAllCauses, httpGetSingleCause, httpCreateCause, httpUpdateCause, httpDeleteCause, httpPushDonator, httpGetCausesForUser, httpGetTopThreeCauses } = require('./causes.controller')

const causesRouter = express.Router()

causesRouter.get('/', httpGetAllCauses)
causesRouter.get('/:id', httpGetSingleCause)
causesRouter.post('/', httpCreateCause)
causesRouter.post('/updatecause', httpUpdateCause)
causesRouter.delete('/', httpDeleteCause)
causesRouter.post('/push-donator', httpPushDonator)
causesRouter.get('/user-donations/:id', httpGetCausesForUser)
causesRouter.get('/top/three-causes', httpGetTopThreeCauses)

module.exports = causesRouter