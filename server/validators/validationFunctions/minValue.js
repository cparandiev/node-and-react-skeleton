const { INVALID_MIN_VALUE } = require('../../messages').ERROR_MESSAGES;
const ofType = require('./ofType');

module.exports = (desiredMinValue) => ({ value, propName }) => {
    const ofTypeValidationResult = ofType(Number)({value, propName});
    if(!ofTypeValidationResult.valid){
        return ofTypeValidationResult;
    }

    if (value < desiredMinValue) {
        return {
            valid: false,
            errorMessage: INVALID_MIN_VALUE({ propName, desiredMinValue})
        }
    }

    return {
        valid: true
    }
}