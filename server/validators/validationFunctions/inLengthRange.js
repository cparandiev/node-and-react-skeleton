const ERROR_MESSAGES = require('../../messages').ERROR_MESSAGES;
const minLength = require('./minLength');
const maxLength  = require('./maxLength');

module.exports = (desiredMinLength, desiredMaxLength) => ({ value, propName }) => {
    const minLengthValidationResult = minLength(desiredMinLength)({value, propName});
    if(!minLengthValidationResult.valid){
        return minLengthValidationResult;
    }

    const maxLengthValidationResult = maxLength(desiredMaxLength)({value, propName});
    if(!maxLengthValidationResult.valid){
        return maxLengthValidationResult;
    }

    return {
        valid: true
    }
}