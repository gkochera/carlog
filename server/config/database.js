var MongoClient = require('mongodb').MongoClient;
const dbConfig = require('./database.config')

module.exports = {
    connect: function (callback) {
        MongoClient.connect( dbConfig.url,  { useNewUrlParser: true }, function( err, client ) {
            _db  = client.db('carlog');
            return callback( err );
          } );
        },
    getDb: function () {
        return _db
    }
}