const { Types } = require('mongoose');

function stringToMongoObjectId(str) {
    if (Types.ObjectId.isValid(str)) {
        return new Types.ObjectId(str);
    } else {
        throw new Error('Invalid MongoDB ObjectId string');
    }
}

module.exports = {
    stringToMongoObjectId
};