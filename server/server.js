const express = require('express');
const mongodb = require('mongodb')
const dbConfig = require('./config/database.config');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const MongoClient = MongoClient(dbConfig.url, { useUnifiedTopology: true })
var db;



app.get('/api/cars', (req, res) => {
    res.json("GET to /api/cars")
})

app.post('/api/cars', (req, res) => {
    res.json("POST to /api/cars")
})

const port = process.env.PORT || '5000';
app.set('port', port);

MongoClient.connect(dbConfig.url, (err, database) => {
    if (err) throw err;
    db = database;
    db.collection('cars').find()
    app.listen(port, function () {
        console.info(`Server is up and running on port ${port}`)
    });
})

