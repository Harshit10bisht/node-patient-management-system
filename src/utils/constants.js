const ROLES = {
    ADMIN: 'admin',
    DOCTOR: 'doctor',
    PATIENT: 'patient',
};

const PERMISSIONS = {
    PATIENT_RECORD: 'patient_record',
    APPOINTMENT: 'appointment',
};

const DB_OPERATIONS = {
    CREATE: 'create',
    READ: 'read',
    UPDATE: 'update',
    DELETE: 'delete',
}

const APPOINTMENT_STATUS = {
    PENDING: 'pending',
    SCHEDULED: 'scheduled',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled',
};

module.exports = {
    ROLES,
    DB_OPERATIONS,
    APPOINTMENT_STATUS,
    PERMISSIONS
};
