const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser')
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

MongoClient.connect('mongodb+srv://tobias:Wartberg11_@mytineryapp-kriyb.mongodb.net/mytineryApp?retryWrites=true', (error, db) => {
    var dbase = db.db("mytineryApp");
    if (error)
        return console.log(error);

    app.listen(8080, () => {
        console.log('app working on 8080')
    })

    router.get('/all', function (request, response) {
        dbase.collection("cities").find().toArray((error, result) => {
            if (!error)
                return response.send(result);
        })
    })

    router.get('/itineraries', function (request, response) {
        dbase.collection("itineraries").find().toArray((error, result) => {
            if (!error) {
                return response.send(result);
            }
        })
    })

    router.get('/city/:name', function (request, response) {
        dbase.collection("itineraries").find().toArray((error, result) => {
            if (!error) {
                for (var i = 0; i < result.length; i++) {
                    if (result[i].name === request.params.name) {
                        return response.send(result[i]);
                    }
                }
            }
        })
    })

    router.get('/home', function (request, response) {
        response.send('Home');
    })

    app.use("/cities", router);
})