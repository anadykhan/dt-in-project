const express = require('express')
const api = require('./routes/api')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/v1', api)

module.exports = app