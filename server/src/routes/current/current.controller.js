const { getSingleUser } = require("../../models/users/users.model")

async function httpGetCurrentUser (req, res) {
    try {
        const userId = req.userId.id
        const searchedUser = await getSingleUser(userId)
        return await res.status(200).json(searchedUser)
    } catch (error) {
        return res.status(500).json({ message: error.message }) 
    }
}

module.exports = httpGetCurrentUser