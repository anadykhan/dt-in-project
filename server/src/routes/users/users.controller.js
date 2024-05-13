const { getAllUsers, getSingleUser, createUser, updateUser, deleteUser } = require('./../../models/users/users.model')

async function httpGetAllUsers (req, res) {
    const users = await getAllUsers()
    try {
        return res.status(200).json(users)
    } catch (err) {
        return res.status(500).json(err)
    } 
}

async function httpGetSingleUser(req, res) {
    try {
        const userID = req.params.id
        const searchedUser = await getSingleUser(userID)
        return await res.status(200).json(searchedUser)
    } catch (err) {
        return res.status(500).json(err)
    }
}

async function httpCreateUser(req, res) {
    try {
        const savedUser = await createUser(req.body)
        return res.status(201).json(savedUser)
    } catch (err) {
        return res.status(500).json(err)
    }

}

async function httpUpdateUser(req, res) {
    if (!req.body._id) {
        res.status(500).json({ msg: "provide an User_id" })
    }
    try {
        const updatedUser = await updateUser(req.body)
        return res.status(200).json(updatedUser)
    } catch (err) {
        return res.status(500).json(err)
    }
}

async function httpDeleteUser(req, res) {
    if (!req.body._id) {
        res.status(500).json({ msg: "provide an User_id" })
    }
    try {
        await deleteUser(req.body)
        return res.status(200).json("User has been deleted")
    } catch (err) {
        return res.status(500).json(err)
    }
}

module.exports = {
    httpGetAllUsers,
    httpGetSingleUser,
    httpCreateUser,
    httpUpdateUser,
    httpDeleteUser
}