const express = require('express');
const app = express();
const cors = require('cors')
const database = require('./config/database')
const mongodb = require('mongodb')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Set up CORS
app.use(cors({
    origin: true, // "true" will copy the domain of the request back
                  // to the reply. If you need more control than this
                  // use a function.

    credentials: true, // This MUST be "true" if your endpoint is
                       // authenticated via either a session cookie
                       // or Authorization header. Otherwise the
                       // browser will block the response.

    methods: 'POST,GET,PUT,OPTIONS,DELETE' // Make sure you're not blocking
                                           // pre-flight OPTIONS requests
}));

var db;
database.connect((err, client) => {
    if (err) console.log(err);

    app.get('/api/cars', async (req, res) => {
        db = database.getDb()
        let cursor = db.collection('cars').find()
        const values = await cursor.toArray()
        res.json(values)
    });
    
    app.post('/api/cars', (req, res) => {
        db = database.getDb()
        db.collection('cars').insertOne(req.body, (err, result) => {
            res.json(result.ops[0])
        })
    });

    app.delete('/api/cars/:id', (req, res) => {
        db = database.getDb();
        let car = {_id: mongodb.ObjectID(req.params.id)}
        db.collection('cars').removeOne(car, (err, result) => {
            res.json(result)
        })
    });
    
    const port = process.env.PORT || '5000';
    app.set('port', port);

    app.listen(port, () => {
        console.log('Server is running....');
    })
})



