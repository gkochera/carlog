var MongoClient = require('mongodb').MongoClient;
const dbConfig = require('./database.config')

let _db;

module.exports = {
    connect: function (callback) {
        MongoClient.connect( dbConfig.url,  { useNewUrlParser: true, useUnifiedTopology: true }, function( err, client ) {
            _db = client.db('carlog');
            if (err) {
                return callback(err);
            } else {
                return callback("Database successfully connected...")
            }
          } );
        },
    getDb: function () 
    {   
        console.log(_db);
        return _db
    }
}