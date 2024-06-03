async function logout(req, res) {
    try {
        // Clear the token cookie by setting an expired date
        res.clearCookie('token').status(200).json({ success: true, message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    logout,
}
