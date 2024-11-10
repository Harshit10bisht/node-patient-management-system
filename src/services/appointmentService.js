const Appointment = require('../models/Appointment');
const { stringToMongoObjectId } = require('../utils/common');

// Get all appointments for a user (either doctor or patient or admin)
const getAppointments = async ({ role, userId }) => {
    try {
        const query = {};
        if (role === 'doctor') {
            query.doctorId = stringToMongoObjectId(userId);
        } else if (role === 'patient') {
            query.patientId = userId;
        }
        const appointments = await Appointment.find(query).lean();
        return appointments;
    } catch (error) {
        throw new Error(`Error fetching appointments: ${error.stack} ${error.message}`);
    }
}

// Create a new appointment
const createAppointment = async (appointmentData) => {
    try {
        const appointment = await Appointment.create(appointmentData);
        return appointment;
    } catch (error) {
        throw new Error(`Error creating appointment: ${error.stack} ${error.message}`);
    }
}

// Update an existing appointment
const updateAppointment = async ({ appointmentId, updateData }) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate({ _id: appointmentId }, updateData, { new: true });
    } catch (error) {
        throw new Error(`Error updating appointment: ${error.stack} ${error.message}`);
    }
}

// Delete an existing appointment
const deleteAppointment = async (appointmentId) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(appointmentId);
        if (!appointment) {
            throw new Error('Appointment not found');
        }
        await appointment.destroy();
        return { message: 'Appointment deleted successfully' };
    } catch (error) {
        throw new Error(`Error deleting appointment: ${error.stack} ${error.message}`);
    }
}

module.exports = {
    getAppointments,
    createAppointment,
    updateAppointment,
    deleteAppointment
};