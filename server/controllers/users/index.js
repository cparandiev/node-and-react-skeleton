const users = Object.create(null);

users.register = require('./register');
users.login = require('./login');

module.exports = users;