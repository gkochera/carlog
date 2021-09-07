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

    app.get('/api/parts', async (req, res) => {
        db = database.getDb()
        let cursor = db.collection('parts').find()
        const values = await cursor.toArray()
        res.json(values)
    });
    
    app.post('/api/parts', (req, res) => {
        db = database.getDb()
        db.collection('parts').insertOne(req.body, (err, result) => {
            res.json(result.ops[0])
        })
    });

    app.delete('/api/parts/:id', (req, res) => {
        db = database.getDb();
        let part = {_id: mongodb.ObjectID(req.params.id)}
        db.collection('parts').removeOne(part, (err, result) => {
            res.json(result)
        })
    });

    app.get('/api/users', async (req, res) => {
        db = database.getDb()
        let cursor = db.collection('users').find()
        const values = await cursor.toArray()
        res.json(values)
    });
    
    app.post('/api/users', (req, res) => {
        db = database.getDb()
        db.collection('users').insertOne(req.body, (err, result) => {
            res.json(result.ops[0])
        })
    });

    app.delete('/api/users/:id', (req, res) => {
        db = database.getDb();
        let user = {_id: mongodb.ObjectID(req.params.id)}
        db.collection('users').removeOne(user, (err, result) => {
            res.json(result)
        })
    });

    app.get('/api/sitedata/makes', (req, res) => {
        res.json({
            makes: [
                "Chevrolet",
                "Volkswagen",
                "Nissan",
                "Pontiac",
                "Lambroghini",
                "Audi",
                "Seat",
                "Skoda",
                "Ford",
                "Dodge",
                "Jeep"
            ]
        })
    })
    
    const port = process.env.PORT || '5000';
    app.set('port', port);

    app.listen(port, () => {
        console.log('Server is running....');
    })
})



