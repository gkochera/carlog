var express = require('express')
const router = express.Router();
const mongodb = require('mongodb')
var db = require('../../config/database')
const logger = require('../../config/logger')

/*
    LOGIN ROUTE
*/

router.post('/', async (req, res) => {
    console.log(req.body)
    let cursor = await db.getDb().collection('users').findOne({email: req.body.email})
    console.log("Login Event", cursor)
    res.json(cursor)
})

module.exports = router;