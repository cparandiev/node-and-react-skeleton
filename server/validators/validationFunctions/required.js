const { REQUIRED } = require('../../messages').ERROR_MESSAGES;

module.exports = ({value, propName }) => {
    if (!value) {
        return {
            valid: false,
            errorMessage: REQUIRED(propName)
        }
    }

    return {
        valid: true
    }
}