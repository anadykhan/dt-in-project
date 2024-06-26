const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    donated: {
        type: [String]
    }
})

module.exports = mongoose.model('User', usersSchema)