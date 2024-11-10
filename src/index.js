const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const patientRoutes = require('./routes/patientRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middlewares/authMiddleware');
const PORT = process.env.PORT || 4000;

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/patient', authMiddleware, patientRoutes);
app.use('/appointment', authMiddleware, appointmentRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Handle uncaught exceptions and unhandled rejections
const handleExit = (err) => {
    console.error('Error:', err);
    process.exit(1);
};

process.on('uncaughtException', handleExit);
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    handleExit(reason);
});