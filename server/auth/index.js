const auth = Object.create(null);

auth.requireAuthentication = require('./requireAuthentication');
auth.requireAuthorization = require('./requireAuthorization');

module.exports = auth;