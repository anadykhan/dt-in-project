const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL?process.env.MONGO_URL:''

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err)
});

// console.log(process.env.MONGO_URL)

async function mongoConnect() {
    if (!MONGO_URL) {
        console.error('MongoDB URL is not defined.');
        return;
    }
    await mongoose.connect(MONGO_URL)
}

async function mongoDisconnect() {
    await mongoose.disconnect()
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}