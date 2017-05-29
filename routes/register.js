var crypto = require('crypto'),
    User = require('../models/user.js');

var register = {
    get: get,
    post: post
};

function get (req, res, next) {
    res.render('register', { title: '注册', register: true });
}

function post (req, res, next) {
    var md5 = crypto.createHash('md5');
    var passwordRepeat = req.body.passwordRepeat;
    var user = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }
    if (!user.name) {
        req.flash('error', '姓名不能为空');
        res.send({
            'status': 'fail',
            'message': '姓名不能为空'
        });
        return;
    }
    if (!user.password) {
        req.flash('error', '密码不能为空');
        res.send({
            'status': 'fail',
            'message': '密码不能为空'
        });
        return;
    }
    if (passwordRepeat != user.password) {
        req.flash('error', '两次输入的密码不一致');
        res.send({
            'status': 'fail',
            'message': '两次输入的密码不一致'
        });
        return;
    }
    if (!user.email) {
        req.flash('error', '邮箱不能为空');
        res.send({
            'status': 'fail',
            'message': '邮箱不能为空'
        });
        return;
    }

    user.password = md5.update(user.password).digest('hex');
    var newUser = new User(user);
    User.get(newUser.name, function(err, user) {
        if (user) {
            req.flash('error', '用户已存在');
            res.send({
                'status': 'fail',
                'message': '用户已存在'
            });
            return;
        }
        newUser.save(function (err, user) {
            if (err) {
                req.flash('error', err);
                res.send({
                    'status': 'fail',
                    'message': err
                });
                return;
            }
            req.session.user = user;
            req.flash('success', '注册成功');
            res.send({
                'status': 'success',
                'message': '注册成功'
            });
        });
    });
}

module.exports = register;