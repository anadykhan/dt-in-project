const express = require('express')
const { httpGetAllCauses, httpGetSingleCause, httpCreateCause, httpUpdateCause, httpDeleteCause } = require('./causes.controller')

const causesRouter = express.Router()

causesRouter.get('/', httpGetAllCauses)
causesRouter.get('/:id', httpGetSingleCause)
causesRouter.post('/', httpCreateCause)
causesRouter.post('/updatecause', httpUpdateCause)
causesRouter.delete('/', httpDeleteCause)

module.exports = causesRouter