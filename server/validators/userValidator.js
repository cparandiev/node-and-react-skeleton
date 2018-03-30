const validator = require('./validator');
const userValidationSchema = require('./validationSchemas/user');

const userValidator = Object.create(null);

userValidator.validate = (entity) => validator.validate(userValidationSchema)(entity);

module.exports = userValidator;