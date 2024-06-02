const jwt = require('jsonwebtoken');
const users = require('../../models/users/users.mongo')

async function httpGetCurrentUser(req, res) {
    // const accessToken = req.headers.authorization
    const accessToken = await req.headers.cookie.substring('token='.length)

    // console.log(accessToken)
    console.log(req.headers)

    if (!accessToken) {
        return res.status(401).json({ message: 'Access token not found!' })
    }

    //if (await userInvalidTokens.findOne({ accessToken })) {
    //    return res.status(401).json({ message: 'Access token invalid', code: 'AccessTokenInvalid' })
    //}

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
            return res.status(401).json({ message: 'Acees token invalid', code: 'Access token invalid' })
        }
        else {
            return res.status(500).json({ message: error.message })
        }

        return res.status(401).json({ message: 'Access token invalid or expired' })
    }
}

module.exports = httpGetCurrentUser;
