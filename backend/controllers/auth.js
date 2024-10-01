// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const loginUser = async (req, res) => {
    try {
        console.log(req.body);
        const { username, password } = req.body;

        // Basic input validation
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }
        // const test = await User.findOne({username: 'John Doe'})
        // console.log(test)
        const user = await User.findOne({ username });
        console.log(user);

        // Check if user exists and password matches
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        console.log(process.env.JWT_SECRET)
        // Sign JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { loginUser };
