var express = require('express')
const router = express.Router();
const mongodb = require('mongodb')
var db = require('../../config/database')
const logger = require('../../config/logger')

router.get('/', async (req, res) => {
    let cursor = db.getDb().collection('parts').find()
    const values = await cursor.toArray()
    res.json(values)
});

router.post('/', (req, res) => {
    db.getDb().collection('parts').insertOne(req.body, (err, result) => {
        res.json(result.ops[0])
    })
});

router.delete('/:id', (req, res) => {
    let part = {_id: mongodb.ObjectID(req.params.id)}
    db.getDb().collection('parts').removeOne(part, (err, result) => {
        res.json(result)
    })
});

module.exports = router