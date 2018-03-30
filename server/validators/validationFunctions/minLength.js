const { INVALID_MIN_LENGTH } = require('../../messages').ERROR_MESSAGES;
const ofType = require('./ofType');

module.exports = (desiredMinLength) => ({ value, propName }) => {
    const ofTypeValidationResult = ofType(String)({value, propName});
    if(!ofTypeValidationResult.valid){
        return ofTypeValidationResult;
    }

    if (value.length < desiredMinLength) {
        return {
            valid: false,
            errorMessage: INVALID_MIN_LENGTH({ propName, desiredMinLength})
        }
    }

    return {
        valid: true
    }
}