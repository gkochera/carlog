const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Car = require('../models/carModel')



router.post('/', function(req, res) {
    console.log(req.body);
    var carInstance = new Car (req.body);
    carInstance.save((err) => {
        if (err) {
            return console.log(err)
        }
    })
    res.json(carInstance)
})

router.get('/', async (req, res) => {
    var db = mongoose.connection.getClient()
    console.log(db.)

    res.json('yes')

})

module.exports = router;