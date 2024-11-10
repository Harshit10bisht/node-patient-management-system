const User = require('../models/User');

const createPatient = async (userData) => {
    try {
        const user = new User(userData);
        return await user.save();
    } catch (error) {
        throw new Error(`Error creating user: ${error.stack} ${error.message}`);
    }
};

const getPatientById = async (userId) => {
    try {
        return await User.findById(userId).lean();
    } catch (error) {
        throw new Error(`Error fetching user: ${error.stack} ${error.message}`);
    }
};

const updatePatient = async (userId, userData) => {
    try {
        return await User.findByIdAndUpdate({ _id: userId }, userData, { new: true });
    } catch (error) {
        throw new Error(`Error updating user: ${error.stack} ${error.message}`);
    }
};

const deletePatient = async (userId) => {
    try {
        return await User.findByIdAndDelete(userId);
    } catch (error) {
        throw new Error(`Error deleting user: ${error.stack} ${error.message}`);
    }
};

const getAllPatients = async () => {
    try {
        return await User.find({ role: 'patient' }).lean();
    } catch (error) {
        throw new Error(`Error fetching users: ${error.stack} ${error.message}`);
    }
};

module.exports = {
    createPatient,
    getPatientById,
    updatePatient,
    deletePatient,
    getAllPatients
};