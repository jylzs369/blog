var crypto = require('crypto'),
    User = require('../models/user.js');

module.exports = function(app) {
    /* GET home page. */
    app.get('/', function(req, res, next) {
            res.render('index', { title: '主页', home: true });
        })
        .get('/register', function(req, res, next) {
            res.render('register', { title: '注册', register: true });
        })
        .post('/register', function(req, res, next) {
            var name = req.body.name;
        })
        .get('/login', function(reg, res, next) {
            res.render('login', { title: '登录', login: true });
        })
        .post('/login', function(reg, res, next) {

        })
        .get('/post', function(reg, res, next) {
            res.render('post', { title: '发表', currPage: 'post' });
        })
        .post('/post', function(reg, res, next) {

        })
        .get('/logout', function(reg, res, next) {

        });
};