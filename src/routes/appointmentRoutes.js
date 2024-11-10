const express = require('express');
const {
    createAppointment,
    getAppointments,
    updateAppointment,
    deleteAppointment
} = require('../controllers/appointmentController');
const authorizeRoles = require('../middlewares/authorizeRoles');
const { PERMISSIONS, DB_OPERATIONS } = require('../utils/constants');

const router = express.Router();

const appointmentRoutes = [
    { method: 'post', path: '/', operation: DB_OPERATIONS.CREATE, handler: createAppointment }, // Create a new appointment
    { method: 'get', path: '/all', operation: DB_OPERATIONS.READ, handler: getAppointments }, // Get all appointments
    { method: 'patch', path: '/:id', operation: DB_OPERATIONS.UPDATE, handler: updateAppointment }, // Update an appointment by ID
    { method: 'delete', path: '/:id', operation: DB_OPERATIONS.DELETE, handler: deleteAppointment } // Delete an appointment by ID
];

// Handling RBAC for appointments as a middleware
appointmentRoutes.forEach(route => {
    router[route.method](route.path, authorizeRoles(PERMISSIONS.APPOINTMENT, route.operation), route.handler);
});

module.exports = router;