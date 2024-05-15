const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('../../models/users/users.mongo')

async function login(req, res) {
    const { email, password } = req.body

    try {
        const user = await users.findOne({ email })

        if(!user) {
            return res.status(404).json({
                message: 'User not found'
            })
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    login,
}