const express = require('express');
const app = express();
const User = require("./models/User");
const passport = require('passport');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const passportSetup = require('./config/passport-setup.js');
const router = express.Router();

const mongoURL = "mongodb+srv://tobias:Wartberg11_@mytineryapp-kriyb.mongodb.net/mytineryApp?retryWrites=true";
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(mongoURL, (error, db) => {
    var dbase = db.db("mytineryApp");
    if (error) 
        console.log(error);

    app.listen(port, () => {
        console.log("\n", `Application listening on port: ${port}`, "\n");
    })

    router.post('/api/user/logout', (req, res) => {
        const {username} = req.body;

        if (!username) {
            return res.send({success: false, message: 'Field is empty'});
        }

        dbase.collection('users').find().toArray((err, result) => {
            let rawUser = result.filter(user => user.username === username);
            if (rawUser.length <= 0)
                return res.send({state: 'username', success: false, message: 'This user doesnt exist'});

            var user = rawUser[0];

            if (!user.loggedIn)
                return res.send({state: 'alreadyLoggedIn', success: false, message: 'You have to log in first'})
        
            user.loggedIn = false;

            dbase.collection('users').save(user, (error, result) => {
                if (error) {
                    return res.send({
                        success: false,
                        message: "Error: Server Error"
                    })
                }
                res.send({
                    success: true,
                    message: "Logged out"
                });
            })
        })
    })

    router.post('/api/user/login', (req, res) => {
        const {username, password} = req.body;

        if (!username || !password)
            return res.send({success: false, message: 'Field is empty'});

        dbase.collection('users').find().toArray((err, result) => {
            let rawUser = result.filter(user => user.username === username);
                                                                                                                
            if (rawUser.length <= 0)
                return res.send({state: 'username', success: false, message: 'This user doesnt exist'});
                
            var user = rawUser[0];
            
            if (user.password !== password)
                return res.send({state: 'password', success: false, message: "Your password is wrong"});

            if (user.loggedIn) 
                return res.send({state: 'alreadyLoggedIn', success: false, message: "You are already logged in"});
                
            user.loggedIn = true;
            
            dbase.collection('users').save(user, (error, result) => {
                if (error) {
                    return res.send({
                        success: false,
                        message: "Error: Server Error"
                    })
                }
                res.send({
                    success: true,
                    message: "Logged in"
                });
            })
        })
    })
    
    router.post('/api/user/create', (req, res) => {
        const {username, password, email, firstname, lastname} = req.body;

        if (!username || !password || !email || !firstname || !lastname)
            return res.send({success: false, message: "Field is empty"});

        dbase.collection('users').find().toArray((err, result) => {
            let emailAlreadyExist = result.filter(user => user.email === email);
            let usernameAlreadyExist = result.filter(userr => userr.username === username);
            
            if (emailAlreadyExist.length > 0 && usernameAlreadyExist.length > 0) {
                return res.send({
                    success: false,
                    message: {
                        email: "Email is already in use", 
                        username: "Username is already in use"
                    }
                });
            }

            if (usernameAlreadyExist.length > 0) {
                return res.send({
                    success: false,
                    message: {username: "Username is already in use"}
                });
            }

            if (emailAlreadyExist.length > 0) {
                return res.send({
                    success: false,
                    message: {email: "Email is already in use"}
                });
            }

            var user = new User();
            user.username = username;
            user.password = password;
            user.email = email;
            user.firstname = firstname;
            user.lastname = lastname;
            user.loggedIn = false;

            dbase.collection('users').save(user, (error, result) => {
                if (error) {
                    return res.send({
                        success: false,
                        message: "Error: Server Error"
                    })
                }
                res.send({
                    success: true,
                    message: "New User created"
                });
            })
        })
    });

    router.get('/home', function (request, response) {
        response.send('Home');
    })

    router.get('/all', function (request, response) {
        dbase.collection("cities").find().toArray((error, result) => {
            if (!error) {
                return response.send(result);
            }
        })
    })

    router.get('/itineraries', function (request, response) {
        dbase.collection("itineraries").find().toArray((error, result) => {
            if (!error) {
                return response.send(result);
            }
        })
    })

    router.get('/activities/all', function (request, response) {
        dbase.collection('activities').find().toArray((error, result) => {
            if (!error) {
                return response.send(result);
            }
        })
    })

    router.get('/city/:name', function (request, response) {
        let { name } = request.params;

        dbase.collection('itineraries').find({ reference: name }).toArray((error, result) => {
            if (error) {
                return response.send({success: false, message: 'Error: Server Error'});
            }

            if (result.length === 0) {
                return response.send({success: false, message: 'Error: No Itinerary Found'});
            }

            return response.send({success: true, message: result});
        })
    })

    router.get('/google', passport.authenticate('google', {
        scope: ['profile']
    }))

    router.get('/google/redirect', passport.authenticate('google', (req, res) => {
        res.send("You reached the callback URL");
    }))

    app.use("/api", router);
})


// 3119 71821514265217 1115131320 91313518 14935!