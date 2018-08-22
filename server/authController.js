// Array of users
let users = [];

module.exports = {

    // Find the user's information and save it to sessions
    login: ( req, res ) => {
        const { username, password } = req.body;

        let user = users.find( user => username === user.username && password === user.password );

        if( user ) {
            req.session.user = user;
            res.status(200).send( req.session );
        }
        else {
            res.status(403).send( 'You need to create an account' );
        }
    },

    // Create a new user object on the users array
    register: ( req, res ) => {
        users.push({
            username: req.body.username,
            password: req.body.password,
            favoriteColor: req.body.color
        });

        req.session.user = {}
        req.session.user.username = req.body.username;

        res.status(200).send( req.session );
    }

}