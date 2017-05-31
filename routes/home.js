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
    var posts = [];
    Post.get(user.name, function (err, result) {
        posts = result;
        console.log(result);
    });
    res.render('index', { title: '主页', home: true, user: user, posts: posts });
}

module.exports = home;