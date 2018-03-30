const { INVALID_MAX_LENGTH } = require('../../messages').ERROR_MESSAGES;
const ofType = require('./ofType');

module.exports = (desiredMaxLength) => ({ value, propName }) => {
    const ofTypeValidationResult = ofType(String)({value, propName});
    if(!ofTypeValidationResult.valid){
        return ofTypeValidationResult;
    }

    if (value.length > desiredMaxLength) {
        return {
            valid: false,
            errorMessage: INVALID_MAX_LENGTH({ propName, desiredMaxLength})
        }
    }

    return {
        valid: true
    }
}