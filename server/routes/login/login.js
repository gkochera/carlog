var express = require('express')
const router = express.Router();
const mongodb = require('mongodb')
var db = require('../../config/database')
const logger = require('../../config/logger')
const secret = require('../../config/secret')
const jwt = require('jsonwebtoken')

/*
    LOGIN ROUTE
*/

router.post('/', async (req, res) => {

    // Find the user in the database
    let cursor = await db.getDb().collection('users').findOne({email: req.body.email})
    if (cursor === null) {
        return res.status(404).json({
            message: `User with email address ${req.body.email} was not found.`
        })
    }

    // Generate a JWT
    const token = jwt.sign({sub: cursor.email}, secret, { expiresIn: '1d'})

    // Send the token and user data back
    res.json({data: cursor, token: token})
})

module.exports = router;