const { Observable } = require('rxjs');
const Repository = require('./Repository');

const UserRepository = function({url, dbName}){
    this.url = url;
    this.dbName = dbName;
    this.collectionName = 'users';
};

UserRepository.prototype = Object.create(Repository.prototype);

module.exports = UserRepository;