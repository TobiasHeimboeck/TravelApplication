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

MongoClient.connect('mongodb+srv://tobias:Wartberg11_@mytineryapp-kriyb.mongodb.net/mytineryApp?retryWrites=true', (err, db) => {
    var dbase = db.db("mytineryApp");
    if (err)
        return console.log(err)

    app.listen(8080, () => {
        console.log('app working on 8080')
    })

    router.get('/all', function (req, res) {
        dbase.collection("cities").find().toArray((err, result) => {
            if (!err)
                return res.send(result)
        })
    })

    router.get('/home', function (req, res) {
        res.send('Home');
    })
    app.use("/cities", router);
})