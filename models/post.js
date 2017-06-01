var mongo = require('./mongo'),
    utils = require('../public/scripts/utils.js'),
    assert = require('assert');

function Post(post) {
    this.title = post.title;
    this.author = post.author;
    this.content = post.content;
}

// 存储用户信息
Post.prototype.save = function(callback) {
    var now = new Date().getTime();
    // 要存入数据库的用户文档
    utils.generateId('articleId');
    console.log(utils.generatedId)
    var post = {
        _id: utils.generateId('articleId'),
        title: this.title,
        author: this.author,
        time: now,
        content: this.content
    }
    // 连接数据库，执行写入函数
    mongo.client.connect(mongo.url, function (err, db) {
        assert.equal(null, err);
        insertPost(db, post, callback);
    });
}

Post.article = function(id, callback) {
    var data = {
        _id : id
    }
    // 连接数据库。执行读取函数s
    mongo.client.connect(mongo.url, function (err, db) {
        assert.equal(null, err);
        findOnePost(db, data, callback);
    });
}
// 获取所有文章
Post.get = function(author, callback) {
    var data = {
        author: author
    }
    // 连接数据库。执行读取函数s
    mongo.client.connect(mongo.url, function (err, db) {
        assert.equal(null, err);
        findPosts(db, data, callback);
    });
}

// 写入发表文章文档函数
function insertPost(db, data, callback) {
    var posts = db.collection('posts');
    posts.insert(data, function(err, result) {
        db.close();
        callback(err, result.ops[0]);
    });
}
// 查找用户所有文章函数
function findOnePost(db, data, callback) {
    var posts = db.collection('posts');
    posts.findOne(data, function (err, result) {
        db.close();
        callback(err, result);
    });
}
// 查找用户所有文章函数
function findPosts(db, data, callback) {
    var posts = db.collection('posts');
    posts.find(data).toArray(function (err, result) {
        db.close();
        callback(err, result);
    });
}

module.exports = Post;