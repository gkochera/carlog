var express = require('express')
const router = express.Router();
const mongodb = require('mongodb')
var db = require('../../config/database')
const logger = require('../../config/logger')

/* 
    GET ALL CARS 
*/

router.get('/', async (req, res) => {
    let cursor = db.getDb().collection('cars').find()
    const values = await cursor.toArray()
    res.json(values)
});

/*
    GET A SINGLE CAR BY ITS ID
*/

router.get('/:carid', async (req, res) => {
    let car = {_id: mongodb.ObjectID(req.params.carid)}
    let value = await db.getDb().collection('cars').findOne(car)
    res.json(value)
});

/*
    CREATE A NEW CAR
*/

router.post('/', (req, res) => {
    req.body.ownerId = mongodb.ObjectID(req.body.ownerId);
    db.getDb().collection('cars').insertOne(req.body, (err, result) => {
        res.json(result.ops[0])
    })
});

/*
    DELETE A CAR BY ITS ID
*/

router.delete('/:id', (req, res) => {
    let car = {_id: mongodb.ObjectID(req.params.id)}
    db.getDb().collection('cars').removeOne(car, (err, result) => {
        res.json(result)
    })
});

module.exports = router;