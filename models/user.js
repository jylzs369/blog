var mongo = require('./mongo'),
    assert = require('assert');

function User(user) {
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
}

// 存储用户信息
User.prototype.save = function(callback) {
    // 要存入数据库的用户文档
    var user = {
        name: this.name,
        password: this.password,
        email: this.email
    }
    // 连接数据库，执行写入函数
    mongo.client.connect(mongo.url, function (err, db) {
        assert.equal(null, err);
        insertUser(db, user, callback);
    });
}
// 获取用户信息
User.get = function(name, callback) {
    var data = {
        name: name
    }
    // 连接数据库。执行读取函数s
    mongo.client.connect(mongo.url, function (err, db) {
        assert.equal(null, err);
        findUser(db, data, callback);
    });
}

// 写入用户文档函数
function insertUser(db, data, callback) {
    var users = db.collection('users');
    users.insert(data, function(err, result) {
        db.close();
        callback(err, result.ops[0]);
    });
}
// 读取用户文档函数
function findUser(db, data, callback) {
    var users = db.collection('users');
    users.findOne(data, function(err, result) {
        db.close();
        callback(err, result);
    });
}

module.exports = User;