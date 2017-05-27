var settings = require('../settings'),
    MongoClient = require('mongodb').MongoClient;

// connect url
var url = 'mongodb://' + settings.host + ':' + settings.port + '/' + settings.db;

module.exports = {
  client: MongoClient,
  url: url
}