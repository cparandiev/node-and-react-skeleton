const { PROD_SERVER_PORT } = require('./constants').SERVER
const async = () => {
    return Promise.resolve();
};

async()
    .then(() => require('./config/passport')) //setup the passport
    .then(() => require('express')()) // create new express application
    .then((app) => { // config the express app
        require('./config/express')(app);
        return app;
    })
    .then((app) => {// add server side routes 
        require('./config/routes')(app)
        return app
    }) 
    .then((app) => // start up the application
        app.listen(PROD_SERVER_PORT, () => console.log(`Server listening on port ${PROD_SERVER_PORT}...`))
    )
    .catch((err) => {
        console.error(err);
    });