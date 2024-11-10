const { DB_OPERATIONS } = require('./constants');
const { CREATE, READ, UPDATE, DELETE } = DB_OPERATIONS;

// Restricting only own records read and write are done in service layer while DB call. 
const permissions = {
    patient: {
        patient_record: [READ],
        appointment: [CREATE, READ],
    },
    doctor: {
        patient_record: [CREATE, READ, UPDATE],
        appointment: [READ, UPDATE],
    },
    admin: {
        patient_record: [CREATE, READ, UPDATE, DELETE],
        appointment: [CREATE, READ, UPDATE, DELETE],
    },
};

module.exports = permissions;