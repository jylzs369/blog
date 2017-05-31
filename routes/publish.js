var crypto = require('crypto'),
    Post = require('../models/post.js');

var publish = {
    get: get,
    post: post
};

function get (req, res, next) {
    var user = req.session.user;
    res.render('publish', { title: '发表', publish: true, user: user });
}

function post (req, res, next) {
    var post = {
        title: req.body.title,
        author: req.session.user.name,
        content: req.body.content
    }
    if (!post.title) {
        req.flash('error', '标题不能为空');
        res.send({
            'status': 'fail',
            'message': '标题不能为空'
        });
        return;
    }
    if (!post.content) {
        req.flash('error', '内容不能为空');
        res.send({
            'status': 'fail',
            'message': '内容不能为空'
        });
        return;
    }
    var newPost = new Post(post);
    newPost.save(function (err, post) {
        if (err) {
            req.flash('error', err);
            res.send({
                'status': 'fail',
                'message': err
            });
            return;
        }
        req.flash('success', '发表成功');
        res.send({
            'status': 'success',
            'message': '发表成功'
        });
    });
}

module.exports = publish;