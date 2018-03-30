const passport = require('passport');
const { ExtractJwt, Strategy   } = require("passport-jwt");
const { users } = require('../data');
const { JWT_SECRET } = require('../constants').PASSPORT;

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
}

const strategy = new Strategy(jwtOptions, function(jwt_payload, next) {
    users.getById(jwt_payload.id)
        .subscribe(user => {
            if (user) {
                next(null, user);
            } else {
                next(null, false);
            }
        });
});

passport.use(strategy);
passport.initialize();
