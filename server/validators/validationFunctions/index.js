const validationFunctions = Object.create(null);

validationFunctions.required = require('./required');
validationFunctions.ofType = require('./ofType');
validationFunctions.minLength = require('./minLength');
validationFunctions.maxLength = require('./maxLength');
validationFunctions.inLengthRange = require('./inLengthRange');
validationFunctions.minValue = require('./minValue');
validationFunctions.maxValue = require('./maxValue');
validationFunctions.inValueRange = require('./inValueRange');

module.exports = validationFunctions;