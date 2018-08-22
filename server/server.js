require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser');

const authController = require('./authController');
const sc = require('./session_controller');

let app = express();
app.use( bodyParser.json() );

app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}) );

// Endpoint to see what is on sessions
app.get( '/api/testSession', ( req, res ) => {
    res.status(200).send( req.session );
} );

// Endpoint to assign the user's information to sessions
app.post( '/api/login', authController.login );
// Endpoint to create the user
app.post( '/api/register', authController.register );
// Endpoint to save purchase to user's purchase history
app.post( '/api/purchase', sc.storePurchase );

////////////////////// Example of what the session object might look like
// let session = {
//     "cookie": {
//         "originalMaxAge": null,
//         "expires": null,
//         "httpOnly": true,
//         "path": "/"
//     },
//     "user": {
//         "username": "Biblo Baggins",
//         "purchaseHistory": {
//             "8/21/2018": {

//             }
//         }
//     }
// }



let PORT = process.env.NODE_PORT || 3010;
app.listen( PORT, () => {
    console.log( `listening on port ${PORT}` )
} )