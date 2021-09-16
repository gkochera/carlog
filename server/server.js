const express = require('express');
const app = express();

const cors = require('cors')
const database = require('./config/database')

const logger = require('./config/logger')

// CORS - Because we are using two different ports, we nee to configure CORS.
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

/*
    EXPRESS CONFIGURATION
*/
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/*
    CUSTOM MIDDLEWARE
*/

// Attatch the logger to all incoming requests
app.use((req, res, next) => {
    logger.log('info', `${req.method} ${req.url}`)
    next()
})

/*
    DATABASE
*/

var db;
database.connect(() => {
    db = database.getDb()
    app.listen(port, () => {
        console.log('Server is running....');
    })
})

/*
    ROUTES
*/
var apiRoutes = require('./routes/api')
app.use('/api', apiRoutes)


/*
    PORT CONFIGURATION
*/
const port = process.env.PORT || '5000';
app.set('port', port);




