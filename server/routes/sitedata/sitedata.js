var express = require('express')
const router = express.Router();

/*
    HELPER - COMPARE CAR MAKES
*/

function compareCarMakes(a, b) {
    if (a.make < b.make) {
        return -1
    } else if (a.make > b.make ) {
        return 1
    }
    return 0;
}

/*
    GETS A (CANNED) LIST OF CARS (MAKES, MODELS, SUBMODELS)
*/

router.get('/cars', (req, res) => {
    let cars = [
        { 
            make: "Chevrolet",
            models: [
                {
                    name: "Silverado",
                    submodels: [
                        "1500",
                        "2500",
                        "3500"
                    ]
                }
            ]
        },
        {
            make: "Pontiac",
            models: [
                {
                    name: "Firebird",
                    submodels: [
                        "Trans Am",
                        "Trans Am GT"
                    ]
                }
            ]
        },
        {
            make: "Audi",
            models: [
                {
                    name: "A4",
                    submodels: [
                        "Avant",
                        "Sedan"
                    ]
                },
                {
                    name: "S4",
                    submodels: [
                        "Avant",
                        "Sedan"
                    ]
                },
                {
                    name: "A6",
                    submodels: [
                        "Avant",
                        "Sedan"
                    ]
                }
            ]
        },
        {
            make: "Ford",
            models: [
                {
                    name: "Taurus",
                    submodels: [
                        "LX",
                        "SHO",
                        "Police Interceptor"
                    ]
                }
            ]
        }
    ].sort(compareCarMakes)

    res.json(cars)
})

module.exports = router