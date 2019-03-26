const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const router = express.Router();
const mongoUrl = "mongodb+srv://tobias:Wartberg11_@mytineryapp-kriyb.mongodb.net/mytineryApp?retryWrites=true";
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

MongoClient.connect(mongoUrl, (error, database) => {
    var database = database.db("mytineryApp");

    if (error) return console.error(error);
   
    app.listen(port, console.log('\n', `App started with port: ${port}`, '\n'));
    router.get('/all', function (res) {
        database.collection("cities").find().toArray((error, result) => {
            if (!error) return res.send(result);
        });
    });

    router.get('/home', (res) => res.send('Home'));
    app.use("/cities", router);
});