const { users } = require('../../controllers');
const { requireAuthentication } = require('../../auth');

module.exports = (app) => {
    app.post('/users/register', (req, res) => {
        const userData = req.body;
        
        users.register(userData)
            .subscribe(
                (response) => { res.status(200).json(response); },
                (error) => { res.status(400).json(error); }
            );
    });

    app.post('/users/login', (req, res) => {
        const userCredentials = req.body;
        
        users.login(userCredentials)
            .subscribe(
                (response) => { res.status(200).json(response); },
                (error) => { res.status(400).json(error); }
            );
    });

    //#region Dummy routes
    app.get('/admin', (req, res) => res.json({name: "Ceco"}));


    app.get("/secret", requireAuthentication(), function(req, res){
        res.json("Success! You can not see this without a token");
    });
    //#endregion

    app.all('*', (req, res) => {
        res.redirect('/')
        res.end()
    })
}
