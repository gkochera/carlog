const express = require('express');
const app = express();
const mongodb = require('./config/database')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

var db;
mongodb.connect((err, client) => {
    if (err) console.log(err);

    app.get('/api/cars', async (req, res) => {
        db = mongodb.getDb()
        let cursor = db.collection('cars').find()
        const values = await cursor.toArray()
        res.json(values)
    })
    
    app.post('/api/cars', (req, res) => {
        db = mongodb.getDb()
        db.collection('cars').insertOne(req.body, (err, result) => {
            res.json(result.ops[0])
        })
    })
    
    const port = process.env.PORT || '5000';
    app.set('port', port);

    app.listen(port, () => {
        console.log('Server is running....');
    })
})



