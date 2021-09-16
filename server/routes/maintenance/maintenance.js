var express = require('express')
const router = express.Router();
const mongodb = require('mongodb')
var db = require('../../config/database')
const logger = require('../../config/logger')

/*
    GET ALL MAINTENANCE ITEMS FOR A SPECIFIC VEHILCE
*/

router.get('/maintenance', async (req, res) => {
    return res.json("yes")
})

/*
    ADD A NEW MAINTENANCE ITEM TO A SPECIFIC VEHICLE
*/

router.post('/maintenance', async (req, res) => {

    // Make the Car ID is valid
    let car;
    let carid = mongodb.ObjectID(req.params.carid);
    try {
        car = {_id: carid};
    } catch (Error) {
        return res.status(400).json({
            message: "Invalid Car ID"
        })
    }
    
    // Find the car in the db
    let value = await db.getDb().collection('cars').findOne(car);
    
    // If the car doesn't exist, send an error back to the client.
    if (value === null) {
        return res.status(404).json({
            message: `Car with ID ${carid} does not exist.`
        })
    }

    // Add the maintenance item
    value = db.getDb().collection('cars').findOneAndUpdate(
        {"_id": carid},
        { "$push": {
            "maintenance": req.body
        }},
        {safe: true, upsert: true},
        (err, elem) => {
            if (err) {

                return res.status(500).json({
                    message: `There was an error ${err}`
                })
            } else {
                
                // Send the updated car back to the client.
                return res.status(200).json(elem.value);
            }
        }
    )
})

module.exports = router