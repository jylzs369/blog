var crypto = require('crypto'),
    Post = require('../models/post.js');

var home = {
    get: get
};

function get (req, res, next) {
    var user = req.session.user || null;
    if (!user) {
        res.redirect('/login');
        return;
    }
    Post.get(user.name, function (err, result) {
        var posts = result;
        posts.forEach(function (item, index, arr) {
            item.time = formatDate(item.time);
        });
        res.render('index', { title: '主页', home: true, user: user, posts: posts });
    });
}

function formatDate(timestamp) {
    var date = new Date(timestamp);
    var dateArray = [];
    var timeArray = [];
    var dateString = '';
    dateArray.push(date.getFullYear());
    dateArray.push(date.getMonth() + 1);
    dateArray.push(date.getDay());
    timeArray.push(date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
    timeArray.push(date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    timeArray.push(date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    dateString = dateArray.join('.') + ' ' + timeArray.join(':');
    return dateString;
}

module.exports = home;