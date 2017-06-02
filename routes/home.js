var crypto = require('crypto'),
    common = require('../public/scripts/common'),
    Post = require('../models/post');

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
            item.time = common.formatDate(item.time);
        });
        res.render('index', { title: '主页', home: true, user: user, posts: posts });
    });
}


module.exports = home;