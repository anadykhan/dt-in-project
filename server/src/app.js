const express = require('express');
const api = require('./routes/api');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const corsOptions = {
  origin: 'http://localhost:5173', // Change this to your front-end origin
  credentials: true // Allow sending cookies
};

// Use CORS middleware with options
app.use(cors(corsOptions));
// app.use(cors())
app.use(express.json());
app.use(cookieParser());

app.use('/v1', api);

module.exports = app;
