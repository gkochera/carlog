const express = require('express');
const router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarsModelSchema = new Schema({
    id: Number,
    year: Number,
    make: String,
    model: String,
    submodel: String,
    drive: String,
    transmission: String,
    fuel: String,
    mileage: Number
})

var CarsModel = mongoose.model('CarsModel', CarsModelSchema);

router.get('/', function (req, res) {
    console.log(req.body);
    var carInstance = new CarsModel({
        year: 1994,
        make: 'Chevrolet',
        model: 'Camaro',
        submodel: 'SS',
        drive: 'RWD',
        transmission: 'Manual',
        fuel: 'Gasoline',
        mileage: 45982
    })

    carInstance.save((err) => {
        if (err) {
            return console.log(err);
        }
    })
    res.send('Sending car data...');
});

router.post('/', function(req, res) {
    console.log(req.body);
    var carInstance = new CarsModel (req.body);
    carInstance.save((err) => {
        if (err) {
            return console.log(err)
        }
    })

    res.json(carInstance)
})

module.exports = router;