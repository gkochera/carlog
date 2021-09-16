var MongoClient = require('mongodb').MongoClient;
const dbConfig = require('./database.config')

var _db

module.exports = {
    connect: function(callback) {
        MongoClient.connect(dbConfig.url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
            _db = client.db('carlog');
            return callback(err);
        })
    },
    getDb: function(){
        return _db;
    }
}
