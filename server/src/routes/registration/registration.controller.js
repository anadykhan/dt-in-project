const bcrypt = require('bcrypt');
const users = require('../../models/users/users.mongo');

async function registration(req, res) {
    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await users.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new users({
            username,
            email,
            password: hashedPassword
        });

        // Save user to the database
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    registration
};
