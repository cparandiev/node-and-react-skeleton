const { inLengthRange }  = require('../validationFunctions');

module.exports = {
    username: inLengthRange(3, 20),
    password: /^.{3,5}$/
}
