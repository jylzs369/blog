var mongo = require('../../models/mongo.js'),
    assert = require('assert');
var utils = {};

utils.generateId = function (articleId) {
    var query = {
        _id: articleId
    }
    var generateId; 
    mongo.client.connect(mongo.url, generatedId, function (err, db) {
        assert.equal(null, err);
        var counters = db.collection('counters');
        var result = counters.findAndModify({
            query: query,
            update: {$inc: { counter: 1 }}
        });
    });
}

module.exports = utils;