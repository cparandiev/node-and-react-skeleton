const { INVALID_ARGUMENT } = require('../../messages').ERROR_MESSAGES;
const required  = require('./required');

module.exports = (desiredType) => ({value, propName }) => {
    const requiredValidationResult = required({value, propName});
    if(!requiredValidationResult.valid){
        return requiredValidationResult;
    }

    if (value.constructor !== desiredType) {
        return {
            valid: false,
            errorMessage: INVALID_ARGUMENT({propName, desiredType})
        }
    }

    return {
        valid: true
    }
}