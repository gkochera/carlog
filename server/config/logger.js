const winston = require('winston');

// Create the logger and desired transports
const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.prettyPrint(),
    transports: [
        new winston.transports.File({ filename: 'app.log'})
    ]
})

// Add an additional transport if we aren't in production mode
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
}

module.exports = logger;