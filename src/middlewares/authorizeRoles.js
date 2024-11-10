const permissions = require('../utils/permissions');

// Middleware to verify user has the required permission to access the route and perform the operation
const authorizeRoles = (permission, operation) => (req, res, next) => {
    try {
        const userRole = req.user.role;
        if (!permissions[userRole]?.[permission]?.includes(operation)) {
            return res.status(403).json({ message: 'Access denied' });
        }

        next();
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = authorizeRoles;
