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

//Custom models
async function pushDonator(causeID, donator) {
    // Check if the donator already exists in the array
    const cause = await causes.findById(causeID);
    if (cause.donators.includes(donator)) {
        throw new Error("Donator already exists for this cause.");
    }
    
    // If donator doesn't exist, push it to the array
    await causes.findByIdAndUpdate(
        causeID,
        { $push: { donators: donator } },
        { new: true }
    );
}


async function getCausesForUser(userId) {
    return await causes
        .find({ donators: userId })
        .sort({ createdAt: -1 });
}

module.exports = {
    getAllCauses,
    getSingleCause,
    createCause,
    updateCause,
    deleteCause,
    pushDonator,
    getCausesForUser
}