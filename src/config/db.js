const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Mongo Connection established
const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            dbName: 'patient_management',
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectMongoDB;