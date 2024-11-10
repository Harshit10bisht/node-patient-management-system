// services/authService.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Generate JWT
const generateToken = ({ id, role }) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Signup Service
const signup = async (userdata) => {
    const userExists = await User.findOne({ email: userdata.email });
    if (userExists) {
        throw { status: 400, message: 'User already exists' };
    }

    const user = new User(userdata);
    await user.save();

    return { message: 'User created successfully', token: generateToken({ id: user._id, role: user.role }) };
};

// Login Service
const login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
        throw { status: 401, message: 'Invalid email or password' };
    }

    return { message: 'Login successful', token: generateToken({ id: user._id, role: user.role }) };
};

// Logout Service
const logout = async (token) => {
    // Here, we can remove the token from the client side, but we also need to ensure that the token is blacklisted so that it cannot be used again, so we can store the token in a blacklist collection in the database.
    // WIP: Blacklist token
    return { message: 'Logout successful' };
};

module.exports = {
    signup,
    login,
    logout
};