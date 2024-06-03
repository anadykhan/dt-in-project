const jwt = require('jsonwebtoken');

async function authenticateToken(req, res, next) {
    // const accessToken = req.headers.authorization
    if (!req.headers.cookie) {
        return res.status(401).json({ message: 'Not logged in (Access token not found)' });
    }
    const accessToken = await req.headers.cookie.substring('token='.length)

    console.log(req.headers)

    if (!accessToken) {
        return res.status(401).json({ message: 'Access token not found!' })
    }

    //if (await userInvalidTokens.findOne({ accessToken })) {
    //    return res.status(401).json({ message: 'Access token invalid', code: 'AccessTokenInvalid' })
    //}

    try {
        const decodedAccessToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)

        //req.accessToken = { value: accessToken, exp: decodedAccessToken.exp }
        req.userId = { id: decodedAccessToken.userId }

        next()
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

module.exports = authenticateToken;
