var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var carSchema = new Schema({
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

var Car = mongoose.model('Car', carSchema);

module.exports = Car;