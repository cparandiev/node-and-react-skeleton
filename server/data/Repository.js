const { MongoClient, ObjectId } = require('mongodb');
const { Observable } = require('rxjs');
const { DB_CONNECTION_FAILED } = require('../messages').ERROR_MESSAGES;

const Repository = function({url, dbName, collectionName}){
    this.url = url;
    this.dbName = dbName;
    this.collectionName = collectionName;
}

Repository.prototype._connect = function(){
    return Observable.of({url: this.url, dbName: this.dbName, collectionName: this.collectionName})
        .flatMap(({url, dbName, collectionName}) => 
            Observable.fromPromise(MongoClient.connect(url))
                .map(client => client.db(dbName))
                .map(db => db.collection(collectionName))
            )
        .catch(() => {throw({errorMessage: DB_CONNECTION_FAILED()})} )
}

Repository.prototype.add = function(entity){
    return this._connect()
        .flatMap(collection => collection.insertOne(entity))
        .map(dbResult => dbResult.ops[0]);
}

Repository.prototype.getById = function(id){
    return this._connect()
        .map(collection => collection.find({'_id': new ObjectId(id)}))
        .flatMap(dbResult => Observable.fromPromise(dbResult.toArray()))
        .map(result => result[0])
}

Repository.prototype.deleteById = function(id){
    return this._connect()
        .flatMap(collection => Observable.fromPromise(collection.deleteOne({'_id': new ObjectId(id)})));
}

Repository.prototype.updateById = function(id, newData){
    return this._connect()
        .flatMap(collection => Observable.fromPromise(collection.updateOne({'_id': new ObjectId(id)}, {$set: newData})))
        .map(dbResult => dbResult.result);
}

Repository.prototype.first = function(predicat){
    return this._connect()
        .flatMap(collection => Observable.fromPromise(collection.findOne(predicat)))
}

Repository.prototype.getAll = function(predicat){
    return this._connect()
        .map(collection => collection.find(predicat))
        .flatMap(dbResult => Observable.fromPromise(dbResult.toArray()));
}

Repository.prototype.updateAll = function(predicat, newData){
    return this._connect()
        .flatMap(collection => Observable.fromPromise(collection.updateMany(predicat, {$set: newData})))
        .map(dbResult => dbResult.result);
}

Repository.prototype.deleteAll = function(predicat){
    return this._connect()
        .flatMap(collection => collection.deleteMany(predicat));
}

module.exports = Repository;