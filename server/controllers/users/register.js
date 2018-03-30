const { Observable } = require('rxjs');
const { userValidator } = require('../../validators');
const { add, usernameExist }  = require('../../services').users;
const { USERNAME_EXIST } = require('../../messages').ERROR_MESSAGES

module.exports = (userData) => (
    Observable.of(userData)
    .flatMap(userData => Observable.of(userData)  // validate user's data binding model
        .map(userValidator.validate)
        .do(validationResult => {
            if(!validationResult.valid){
                throw validationResult;
            }
        })
        .map(() => userData)
    )
    .flatMap(userData => Observable.of(userData)  // check if the username is available
        .flatMap((userData) => usernameExist(userData.username))    
        .do(exist => {
            if(exist){
                throw {valid: false, errorMessage: USERNAME_EXIST(userData.username)};
            }
        })
        .map(() => userData)
    )
    .flatMap((userData) => add(userData)) // add new user
);
