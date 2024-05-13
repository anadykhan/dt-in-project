const express = require('express')
const {httpGetAllDonations, httpCreateDonation, httpGetSingleDonation, httpUpdateDonation, httpDeleteDonation} = require('./donations.controller')

const donationsRouter = express.Router()

donationsRouter.get('/', httpGetAllDonations)
donationsRouter.get('/:id', httpGetSingleDonation)
donationsRouter.post('/', httpCreateDonation)
donationsRouter.post('/updatedonation', httpUpdateDonation)
donationsRouter.delete('/', httpDeleteDonation)

module.exports = donationsRouter