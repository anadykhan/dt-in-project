const jwt = require('jsonwebtoken');
const users = require('../../models/users/users.mongo')

async function httpGetCurrentUser(req, res) {
    // Check if the cookie header exists
    if (!req.headers.cookie) {
        return res.status(401).json({ message: 'Not logged in (Access token not found)' });
    }

    const accessToken = req.headers.cookie.substring('token='.length);

    if (!accessToken) {
        return res.status(401).json({ message: 'Access token not found!' });
    }

    try {
        const decodedAccessToken = await jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)

        req.userId = { id: decodedAccessToken.userId }

        const user = await users.findById(decodedAccessToken.userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.json(user)

    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ message: 'Access token expired', code: 'Access token expired' })
        }
        else if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ message: 'Access token invalid', code: 'Access token invalid' })
        }
        else {
            return res.status(500).json({ message: error.message })
        }
    }
}

module.exports = httpGetCurrentUser;
