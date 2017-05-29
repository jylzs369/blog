var crypto = require('crypto'),
    User = require('../models/user.js');

var login = {
    get: get,
    post: post
};

function get (req, res, next) {
    res.render('login', { title: '登录', login: true });
}

function post (req, res, next) {
    var md5 = crypto.createHash('md5'),
        name = req.body.name,
        password = req.body.password;
    if (!name) {
        req.flash('error', '姓名不能为空');
        res.send({
            'status': 'fail',
            'message': '姓名不能为空'
        });
        return;
    }
    if (!password) {
        req.flash('error', '密码不能为空');
        res.send({
            'status': 'fail',
            'message': '密码不能为空'
        });
        return;
    }
    password = md5.update(password).digest('hex');
    User.get(name, function(err, user) {
        if (!user) {
            req.flash('error', '用户不存在');
            res.send({
                'status': 'fail',
                'message': '用户不存在'
            });
            return;
        }
        if (password != user.password) {
            req.flash('error', '密码错误');
            res.send({
                'status': 'fail',
                'message': '密码错误'
            });
            return;
        }
        req.session.user = user;
        req.flash('success', '登录成功');
        res.send({
            'status': 'success',
            'message': '登录成功'
        });
    });
}

module.exports = login;