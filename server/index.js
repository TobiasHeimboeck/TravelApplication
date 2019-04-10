const express = require('express');
const app = express();
const User = require("./models/User");
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect('mongodb+srv://tobias:Wartberg11_@mytineryapp-kriyb.mongodb.net/mytineryApp?retryWrites=true', (error, db) => {
    var dbase = db.db("mytineryApp");
    if (error)
        return console.log(error);

    app.listen(8080, () => {
        console.log('app working on 8080')
    })

    router.post('/api/user/create', (req, res) => {
        const {username, password, email, firstname, lastname} = req.body;

        if (!username) return res.send({success: false, message: "Error: Name is empty"});
        if (!password) return res.send({success: false, message: "Error: Password is empty"});
        if (!email) return res.send({success: false, message: "Error: Email is empty"});
        if (!firstname) return res.send({success: false, message: "Error: Firstname is empty"});
        if (!lastname) return res.send({success: false, message: "Error: Lastname is empty"});

        dbase.collection('users').find().toArray((err, result) => {
            let previousUser = result.filter(user => user.username === username);
            if (previousUser.length > 0) {
                return res.send({
                    success: false,
                    message: "Error: Username is already in use"
                });
            }

            var user = new User();
            user.username = username;
            user.password = password;
            user.email = email;
            user.firstname = firstname;
            user.lastname = lastname;

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

    app.use("/itineraries", router);
    app.use("/cities", router);
})