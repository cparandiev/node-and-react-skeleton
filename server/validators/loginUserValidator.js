const validator = require('./validator');
const loginUserSchema = require('./validationSchemas/loginUser');

const loginUserValidator = Object.create(null);

loginUserValidator.validate = (entity) => validator.validate(loginUserSchema)(entity);

module.exports = loginUserValidator;