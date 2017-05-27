var mongo = require('./mongo'),
    assert = require('assert');

function User(user) {
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
}

User.prototype.save = function(callback) {
    var user = {
        name: this.name,
        password: this.password,
        email: this.email
    }
    mongo.client.connect(mongo.url, function (err, db) {
        assert.equal(null, err);
        insertUser(db, user, function () {
            db.close();
        });
    });
}
User.get = function(name, callback) {
    mongo.client.connect(mongo.url, function (err, db) {
        assert.equal(null, err);
        findUser(db, {name: name}, function () {
            db.close();
        });
    });
}


function insertUser(db, data, callback) {
    var users = db.collection('users');
    users.insert(data, function(err, result) {
        callback(err);
    });
}

function findUser(db, data, callback) {
    var users = db.collection('users');
    users.findOne(data, function(err, result) {
        callback(err);
    });
}

module.exports = User;