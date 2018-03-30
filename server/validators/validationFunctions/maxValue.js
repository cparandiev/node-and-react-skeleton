const { INVALID_MAX_VALUE } = require('../../messages').ERROR_MESSAGES;
const ofType = require('./ofType');

module.exports = (desiredMaxValue) => ({ value, propName }) => {
    const ofTypeValidationResult = ofType(Number)({value, propName});
    if(!ofTypeValidationResult.valid){
        return ofTypeValidationResult;
    }

    if (value > desiredMaxValue) {
        return {
            valid: false,
            errorMessage: INVALID_MAX_VALUE({ propName, desiredMaxValue})
        }
    }

    return {
        valid: true
    }
}