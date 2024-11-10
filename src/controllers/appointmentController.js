const appointmentService = require('../services/appointmentService');

const getAppointments = async (req, res) => {
    try {
        const { role, userId } = req.query;
        const appointments = await appointmentService.getAppointments({ role, userId });
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createAppointment = async (req, res) => {
    try {
        const appointment = await appointmentService.createAppointment(req.body);
        res.status(201).json(appointment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateAppointment = async (req, res) => {
    try {
        const appointment = await appointmentService.updateAppointment(req.params.id, req.body);
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json(appointment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAppointment = async (req, res) => {
    try {
        const appointment = await appointmentService.deleteAppointment(req.params.id);
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAppointments,
    createAppointment,
    updateAppointment,
    deleteAppointment
};
