var express = require('express')
const router = express.Router();
const mongodb = require('mongodb')
var db = require('../../config/database')
const logger = require('../../config/logger')

const maintenanceRoutes = require('../maintenance/maintenance')
router.use('/*/maintenance', maintenanceRoutes)

/*
    GET ALL USERS
*/

router.get('/', async (req, res) => {
    let cursor = db.getDb().collection('users').find()
    const values = await cursor.toArray()
    res.json(values)
});

/*
    CREATE A NEW USER
*/

router.post('/', async (req, res) => {

    // See if the user is already registered in our db
    let email = req.body.email;
    let emailCursor = await db.getDb().collection('users').findOne({email})
    if (emailCursor !== null) {
        logger.error(`Email already registered ${req.body.email}`)
        return res.status(403).json({
            message: "Email is already registered.",
            code: "emailAlreadyRegistered"
        })
    }

    let result = await db.getDb().collection('users').insertOne(req.body)
    if (result.insertedId) {
        let cursor = await db.getDb().collection('users').findOne({_id: mongodb.ObjectID(result.insertedId)})
        logger.info(`Created user with ID: ${cursor._id} (${email})` )
        return res.json(cursor);
    }
    logger.error('Failed to create new user.')
    return res.json(null)
});

/*
    DELETE A USER BY ID
*/

router.delete('/:id', (req, res) => {
    let user = {_id: mongodb.ObjectID(req.params.id)}
    db.getDb().collection('users').removeOne(user, (err, result) => {
        res.json(result)
    })
});

/*
    GET A USERS CARS
*/

router.get('/:userId/cars', async (req, res) => {
    let user = req.params.userId;
    let cursor = await db.getDb().collection('cars').find({ownerId: mongodb.ObjectID(user)}).toArray();
    logger.info(`Retrieved ${cursor.length} car(s) for user with ID ${user}.`)
    return res.json(cursor);
})

module.exports = router;