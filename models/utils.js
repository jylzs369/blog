var mongo = require('./mongo'),
    assert = require('assert');
var utils = {};

utils.generateId = function (queryId, collection, callback) {
    var query = {
        _id: queryId
    }
    mongo.client.connect(mongo.url, function (err, db) {
        assert.equal(null, err);
        var col = db.collection(collection);
        col.findAndModify(query, [['_id', 1]], {$inc: { counter: 1 }}, {new: true}, function (err, result) {
            callback(err, result.value.counter)
        });
    });
}

module.exports = utils;