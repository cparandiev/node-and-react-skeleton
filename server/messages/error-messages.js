const ERROR_MESSAGES = Object.create(null);

ERROR_MESSAGES.REQUIRED = (propName) => (
    `${propName} is required`
);

ERROR_MESSAGES.INVALID_ARGUMENT = ({ propName, desiredType }) => (
    `Expected ${propName} to exist and to be of type '${desiredType.name}'`
);

ERROR_MESSAGES.INVALID_MIN_LENGTH = ({ propName, desiredMinLength }) => (
    `${propName}'s length should NOT be less than ${desiredMinLength}!`
);
  
ERROR_MESSAGES.INVALID_MAX_LENGTH = ({ propName, desiredMaxLength }) => (
    `${propName}'s length should be less than ${desiredMaxLength}!`
);

ERROR_MESSAGES.INVALID_MIN_VALUE = ({ propName, desiredMinValue }) => (
    `${propName}'s value should NOT be less than ${desiredMinValue}!`
);

ERROR_MESSAGES.INVALID_MAX_VALUE = ({ propName, desiredMaxValue }) => (
    `${propName}'s value should be less than ${desiredMaxValue}!`
);

ERROR_MESSAGES.INVALID_REGEX = ({ propName, regex }) => (
    `${propName}'s value does not match to the correct pattern: ${regex}!`
);

ERROR_MESSAGES.USERNAME_EXIST = (username) => (
    `Username ${username} already exists!`
);

ERROR_MESSAGES.UNSUCCESSFUL_LOGIN = () => (
    `Username or password is incorrect!`
);

ERROR_MESSAGES.DB_CONNECTION_FAILED = () => (
    `Database connection failed!`
);

module.exports = ERROR_MESSAGES;