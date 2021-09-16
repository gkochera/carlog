const expressJwt = require('express-jwt');
const secret = require('../config/secret');

module.exports = jwt;

function jwt() {
    return expressJwt({ secret, algorithms: ['HS256'] }).unless({
        path: ['/api/login']
    });
}