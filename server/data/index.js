const UserRepository = require('./UserRepository');
const { URL, DATABASE_NAME} = require('../constants').DATABASE;

const dbConfig = {
    url: URL,
    dbName: DATABASE_NAME
};

const data = Object.create(null);

data.users = new UserRepository(dbConfig);

module.exports = data;