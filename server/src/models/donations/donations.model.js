const donations = require('./donations.mongo')

async function getAllDonations () {
    return await donations
    .find({})
    .sort({ createdAt: -1 })
}

async function getSingleDonation (donationID) {
    return await donations
    .findById(donationID)
}

async function createDonation (donation) {
    const newDonation = new donations(donation)
    await newDonation.save()
}

async function updateDonation (donation) {
    await donations
    .findByIdAndUpdate(
        donation._id,
        {
            $set: donation,
        },
        {
            new: true,
        }
    )
}

async function deleteDonation (donation) {
    await donations
    .findByIdAndDelete(
        donation._id
    )
}

module.exports = {
    getAllDonations,
    getSingleDonation,
    createDonation,
    updateDonation,
    deleteDonation
}