const express = require('express')
const authenticateToken = require('../../authentication/authenticate')
const httpGetCurrentUser = require('./current.controller')

const currentRouter = express.Router()

currentRouter.get('/', authenticateToken, async (req, res) => {
    try {
        //const user = await users.findOne({ _id: req.userId.id })

        //return res.status(200).json({
        //    id: user._id,
        //    name: user.name,
        //    email: user.email
        //})

        return res.status(200).json({message: req.userId})
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

module.exports = currentRouter