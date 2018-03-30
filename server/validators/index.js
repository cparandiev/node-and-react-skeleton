const validators = Object.create(null);

validators.userValidator = require('./userValidator');
validators.loginUserValidator = require('./loginUserValidator');

module.exports = validators;