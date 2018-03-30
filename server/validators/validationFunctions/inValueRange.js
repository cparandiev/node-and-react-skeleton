const ERROR_MESSAGES = require('../../messages').ERROR_MESSAGES;
const minValue = require('./minValue');
const maxValue  = require('./maxValue');

module.exports = (desiredMinValue, desiredMaxValue) => ({ value, propName }) => {
    const minValueValidationResult = minValue(desiredMinValue)({value, propName});
    if(!minValueValidationResult.valid){
        return minValueValidationResult;
    }

    const maxValueValidationResult = maxValue(desiredMaxValue)({value, propName});
    if(!maxValueValidationResult.valid){
        return maxValueValidationResult;
    }

    return {
        valid: true
    }
}