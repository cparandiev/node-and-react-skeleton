const { minLength, maxLength, inLengthRange, inValueRange }  = require('./validationFunctions');
const { REQUIRED, INVALID_REGEX, INVALID_ARGUMENT } = require('../messages').ERROR_MESSAGES

const validator = Object.create(null);

validator.validate = (validationSchema = {}) => (obj = {}) => {
    const keys = Object.keys(validationSchema);

    for (let i = 0; i < keys.length; i += 1) {
        const currentCondition = validationSchema[keys[i]];
        const currentTargetValue = obj[keys[i]];

        //when the object doesn't contains such property
        if (!currentTargetValue) {
            return {valid: false, errorMessage: REQUIRED(keys[i])};
        }

        //when the condition is a regex
        if (currentCondition.constructor === RegExp) {
            if (!currentCondition.test(currentTargetValue)) {
                return {valid: false, errorMessage: INVALID_REGEX({ propName: keys[i], regex: currentCondition })};
            }

            continue;
        }

        //when the condition is a function
        if (currentCondition.constructor === Function) {
            let validationResult = currentCondition({ value: currentTargetValue, propName: keys[i]});
            
            if (!validationResult.valid) {
                return validationResult;
            }

            continue;
        }

        //when the condition is an array
        if (currentCondition.constructor === Array) {
            if (currentTargetValue.constructor !==  Array) {
                return {valid: false, errorMessage: INVALID_ARGUMENT({propName: keys[i], desiredType: Array})};
            }
            for (let j = 0; j < currentCondition.length; j += 1) {
                for (let k = 0; k < currentTargetValue.length; k += 1) {
                    let validationResult = validator.validate(currentCondition[j])(currentTargetValue[k]);
                    if (!validationResult.valid) {
                        return validationResult;
                    }
                }
            }
        }

    }

    return {valid: true};
}

module.exports = validator;
