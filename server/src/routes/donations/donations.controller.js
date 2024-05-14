const donations = require('./../../models/donations/donations.mongo')
const {getAllDonations, createDonation, getSingleDonation, updateDonation, deleteDonation} = require('./../../models/donations//donations.model')

async function httpGetAllDonations (req, res) {
    const donations = await getAllDonations()
    try{
        return res.status(200).json(donations)
    } catch (err) {
        return res.status(500).json(err)
    }
}

async function httpGetSingleDonation (req, res) {
    try {
        const donationID = req.params.id
        const searchedDonation = await getSingleDonation(donationID)
        return await res.status(200).json(searchedDonation)
    } catch (err) {
        return res.status(500).json(err)
    }
}

async function httpCreateDonation (req, res) {
    try {
        const savedDoantion = await createDonation(req.body)
        return res.status(201).json(savedDoantion)
    } catch (err) {
        return res.status(500).json(err)
    }
}

async function httpUpdateDonation (req, res) {
    if (!req.body._id) {
        res.status(500).json({ msg: "provide an Article _id" })
    } 
    try {
        const updatedDonation = await updateDonation(req.body)
        return res.status(200).json(updateDonation)
    } catch (err) {
        return res.status(500).json(err) 
    }
}

async function httpDeleteDonation (req, res) {
    if (!req.body._id) {
        res.status(500).json({ msg: "provide an Article _id" })
    }
    try {
        await deleteDonation(req.body)
        return res.status(200).json("Donation has been deleted")
    } catch (err) {
        return res.status(500).json(err)
    }
}

module.exports = {
    httpGetAllDonations,
    httpGetSingleDonation,
    httpCreateDonation,
    httpUpdateDonation,
    httpDeleteDonation
}