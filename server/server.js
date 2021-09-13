const express = require('express');
const app = express();
const cors = require('cors')
const database = require('./config/database')
const mongodb = require('mongodb');
const winston = require('winston');

// Logging

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.prettyPrint(),
    transports: [
        new winston.transports.File({ filename: 'app.log'})
    ]
})

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
}

// Configuration

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    logger.log('info', `${req.method} ${req.url}`)
    next()
})

// Set up CORS
app.use(cors({
    origin: true, // "true" will copy the domain of the request back
                  // to the reply. If you need more control than this
                  // use a function.

    credentials: true, // This MUST be "true" if your endpoint is
                       // authenticated via either a session cookie
                       // or Authorization header. Otherwise the
                       // browser will block the response.

    methods: 'POST,GET,PUT,OPTIONS,DELETE' // Make sure you're not blocking
                                           // pre-flight OPTIONS requests
}));

var db;
database.connect((err, client) => {
    if (err) console.log(err);

    app.get('/api/cars', async (req, res) => {
        db = database.getDb()
        let cursor = db.collection('cars').find()
        const values = await cursor.toArray()
        res.json(values)
    });

    app.get('/api/cars/:carid', async (req, res) => {
        db = database.getDb()
        let car = {_id: mongodb.ObjectID(req.params.carid)}
        let value = await db.collection('cars').findOne(car)
        res.json(value)
    });
    
    app.post('/api/cars', (req, res) => {
        db = database.getDb()
        db.collection('cars').insertOne(req.body, (err, result) => {
            res.json(result.ops[0])
        })
    });

    app.delete('/api/cars/:id', (req, res) => {
        db = database.getDb();
        let car = {_id: mongodb.ObjectID(req.params.id)}
        db.collection('cars').removeOne(car, (err, result) => {
            res.json(result)
        })
    });

    app.get('/api/parts', async (req, res) => {
        db = database.getDb()
        let cursor = db.collection('parts').find()
        const values = await cursor.toArray()
        res.json(values)
    });
    
    app.post('/api/parts', (req, res) => {
        db = database.getDb()
        db.collection('parts').insertOne(req.body, (err, result) => {
            res.json(result.ops[0])
        })
    });

    app.delete('/api/parts/:id', (req, res) => {
        db = database.getDb();
        let part = {_id: mongodb.ObjectID(req.params.id)}
        db.collection('parts').removeOne(part, (err, result) => {
            res.json(result)
        })
    });

    app.get('/api/users', async (req, res) => {
        db = database.getDb()
        let cursor = db.collection('users').find()
        const values = await cursor.toArray()
        res.json(values)
    });
    
    app.post('/api/users', async (req, res) => {
        db = database.getDb()
        
        // See if the user is already registered in our database
        let email = req.body.email;
        let emailCursor = await db.collection('users').findOne({email})
        if (emailCursor !== null) {
            logger.error(`Email already registered ${req.body.email}`)
            return res.status(403).json({
                message: "Email is already registered.",
                code: "emailAlreadyRegistered"
            })
        }

        let result = await db.collection('users').insertOne(req.body)
        if (result.insertedId) {
            let cursor = await db.collection('users').findOne({_id: mongodb.ObjectID(result.insertedId)})
            logger.info(`Created user with ID: ${cursor._id} (${email})` )
            return res.json(cursor);
        }
        logger.error('Failed to create new user.')
        return res.json(null)
    });

    app.get('/api/users/:userId/cars', async (req, res) => {
        db = database.getDb();
        let user = req.params.userId;

        let cursor = await db.collection('cars').find({ownerId: mongodb.ObjectID(user)}).toArray();
        console.log(user)
        console.log(cursor)
        return res.json(cursor);
    })

    app.delete('/api/users/:id', (req, res) => {
        db = database.getDb();
        let user = {_id: mongodb.ObjectID(req.params.id)}
        db.collection('users').removeOne(user, (err, result) => {
            res.json(result)
        })
    });

    app.get('/api/sitedata/makes', (req, res) => {
            let makes = [
                "Chevrolet",
                "Volkswagen",
                "Nissan",
                "Pontiac",
                "Lambroghini",
                "Audi",
                "Seat",
                "Skoda",
                "Ford",
                "Dodge",
                "Jeep",
                "Mercedes-Benz",
                "Kia",
                "Honda",
                "Toyota",
                "Lexus",
                "Saturn",
                "Chrysler",
                "Fiat",
                "Jaguar",
                "Land Rover",
                "Mitsubishi",
                "Subaru"
            ].sort()
        res.json({ makes })
    })

    function compareCarMakes(a, b) {
        if (a.make < b.make) {
            return -1
        } else if (a.make > b.make ) {
            return 1
        }
        return 0;
    }

    app.get('/api/sitedata/cars', (req, res) => {
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
    
    const port = process.env.PORT || '5000';
    app.set('port', port);

    app.listen(port, () => {
        console.log('Server is running....');
    })
})



