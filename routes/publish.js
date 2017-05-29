var crypto = require('crypto');

var publish = {
    get: get,
    post: post
};

function get (req, res, next) {
    var user = req.session.user;
    res.render('publish', { title: '发表', publish: true, user: user });
}

function post (req, res, next) {
}

module.exports = publish;