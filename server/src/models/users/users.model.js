const users = require('./users.mongo')

async function getAllUsers() {
    return await users
        .find({})
        .sort({ createdAt: -1 })
}

async function getSingleUser(userID) {
    return await users
        .findById(userID)
}

async function createUser(user) {
    const newUser = new users(user)
    await newUser.save()
}

async function updateUser(user) {
    await users
        .findByIdAndUpdate(
            user._id,
            {
                $set: user,
            },
            {
                new: true,
            }
        )
}

async function deleteUser(user) {
    await users
        .findByIdAndDelete(
            user._id
        )
}

module.exports = {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
}