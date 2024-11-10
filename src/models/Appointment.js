const mongoose = require('mongoose');
const { APPOINTMENT_STATUS } = require('../utils/constants');

const appointmentSchema = new mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    bill: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: [
            APPOINTMENT_STATUS.PENDING,
            APPOINTMENT_STATUS.SCHEDULED,
            APPOINTMENT_STATUS.COMPLETED,
            APPOINTMENT_STATUS.CANCELLED
        ],
        default: APPOINTMENT_STATUS.SCHEDULED
    }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);