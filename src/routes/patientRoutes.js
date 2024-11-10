const express = require('express');
const {
    createPatient,
    getAllPatients,
    getPatientById,
    updatePatient,
    deletePatient
} = require('../controllers/patientController');
const authorizeRoles = require('../middlewares/authorizeRoles');
const { PERMISSIONS, DB_OPERATIONS } = require('../utils/constants');

const router = express.Router();

const patientRoutes = [
    { method: 'post', path: '/', operation: DB_OPERATIONS.CREATE, handler: createPatient }, // Create a new patient
    { method: 'get', path: '/all', operation: DB_OPERATIONS.READ, handler: getAllPatients }, // Get all patients
    { method: 'get', path: '/:id', operation: DB_OPERATIONS.READ, handler: getPatientById }, // Get a patient by ID
    { method: 'patch', path: '/:id', operation: DB_OPERATIONS.UPDATE, handler: updatePatient }, // Update a patient by ID
    { method: 'delete', path: '/:id', operation: DB_OPERATIONS.DELETE, handler: deletePatient } // Delete a patient by ID
];

// Handling RBAC for patient record as a middleware
patientRoutes.forEach(route => {
    router[route.method](route.path, authorizeRoles(PERMISSIONS.PATIENT_RECORD, route.operation), route.handler);
});

module.exports = router;
