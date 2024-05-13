const causes = require('./causes.mongo')

async function getAllCauses () {
    return await causes
    .find({})
    .sort({ createdAt: -1 })
}

async function getSingleCause(causeID) {
    return await causes
    .findById(causeID)
}

async function createCause (cause) {
    const newCause = new causes(cause)
    await newCause.save()
}

async function updateCause (cause) {
    await causes
    .findByIdAndUpdate(
        cause._id,
        {
            $set: cause,
        },
        {
            new: true,
        }
    )
}

async function deleteCause (cause) {
    await causes
    .findByIdAndDelete(
        cause._id
    )
}

module.exports = {
    getAllCauses,
    getSingleCause,
    createCause,
    updateCause,
    deleteCause
}