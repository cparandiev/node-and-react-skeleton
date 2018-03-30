const jwt = require('jsonwebtoken');
const { Observable } = require('rxjs');
const { loginUserValidator } = require('../../validators');
const { verifyUsersCredentials, getByUsername }  = require('../../services').users;
const { UNSUCCESSFUL_LOGIN } = require('../../messages').ERROR_MESSAGES;
const { JWT_SECRET } = require('../../constants').PASSPORT;

module.exports = (userCredentials) => (
    Observable.of(userCredentials)
    .flatMap(userCredentials => Observable.of(userCredentials)  // validate user's credentials binding model
        .map(loginUserValidator.validate)
        .do(validationResult => {
            if(!validationResult.valid){
                throw validationResult;
            }
        })
        .map(() => userCredentials)
    )
    .flatMap(userCredentials => Observable.of(userCredentials)  // verify user's username and password
        .flatMap((userCredentials) => verifyUsersCredentials(userCredentials))
        .do(verified => {
            if(!verified){
                throw {valid: false, errorMessage: UNSUCCESSFUL_LOGIN()};
            }
        })
        .map(() => userCredentials)
    )
    .flatMap((userCredentials) => getByUsername(userCredentials.username))
    .map(({username, password,  _id}) => { // generate jwt token for the current user
        const response = {username, password, id: _id};
        
        const payload = {id: _id};
        
        response.token = jwt.sign(payload, JWT_SECRET);

        return response;
    })
);
