const express = require('express');
const api = require('./routes/api');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true
};

// Use CORS middleware with options
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/v1', api);

module.exports = app;
