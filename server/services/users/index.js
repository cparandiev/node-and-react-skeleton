const { Observable } = require('rxjs');
const userService = Object.create(null);
const { users } = require('../../data');

const verifyPasswords = (first, second) => first === second;

userService.add = (user) => (
    Observable.of(user)
    .flatMap(user => users.add(user))
);

userService.usernameExist = (username) => (
    Observable.of(username)
    .flatMap(username => users.first({username}))
    .map(user => !!user)
);

userService.verifyUsersCredentials = ({username, password}) => (
    Observable.of({username, password})
    .flatMap(({username, password}) => users.first({username})
        .map(user => {
            if(!user || !verifyPasswords(user.password, password)){ return false; }

            return true;
        })
    )
);

userService.getByUsername = (username) => (
    Observable.of(username)
    .flatMap(username => users.first({username}))
);

module.exports = userService;