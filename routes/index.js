var authority = require('./authority.js'),
    home = require('./home.js'),
    register = require('./register.js'),
    login = require('./login.js'),
    publish = require('./publish.js'),
    article = require('./article.js')
    upload = require('./upload.js');

module.exports = function (app) {
    /* GET home page. */
    app
        .get('/', function (req, res, next) {
            home.get(req, res, next);
        })
        // 检查登录状态，已登录则跳转到首页
        .get('/register', function (req, res, next) {
            authority.isLogin(req, res, next);
        })
        .get('/register', function (req, res, next) {
            register.get(req, res, next);
        })
        // 检查登录状态，已登录则跳转到首页
        .post('/register', function (req, res, next) {
            authority.isLogin(req, res, next);
        })
        .post('/register', function (req, res, next) {
            register.post(req, res, next);
        })
        // 检查登录状态，已登录则跳转到首页
        .get('/login', function (req, res, next) {
            authority.isLogin(req, res, next);
        })
        .get('/login', function (req, res, next) {
            login.get(req, res, next);
        })
        // 检查登录状态，已登录则跳转到首页
        .post('/login', function (req, res, next) {
            authority.isLogin(req, res, next);
        })
        .post('/login', function (req, res, next) {
            login.post(req, res, next);
        })
        // 检查登录状态，未登录则跳转到登录页
        .get('/publish', function (req, res, next) {
            authority.isLogout(req, res, next);
        })
        .get('/publish', function (req, res, next) {
            publish.get(req, res, next);
        })
        // 检查登录状态，未登录则跳转到登录页
        .post('/publish', function (req, res, next) {
            authority.isLogout(req, res, next);
        })
        .post('/publish', function (req, res, next) {
            publish.post(req, res, next);
        })
        .get('/article/:id', function (req, res, next) {
            article.get(req, res, next);
        })
        .get('/upload', function (req, res, next) {
            authority.isLogout(req, res, next);
        })
        .get('/upload', function (req, res, next) {
            upload.get(req, res, next);
        })
        .post('/upload', function (req, res, next) {
            authority.isLogout(req, res, next);
        })
        .post('/upload', function (req, res, next) {
            upload.post(req, res, next);
        })
        // 检查登录状态，未登录则跳转到登录页
        .get('/logout', function (req, res, next) {
            authority.isLogin(req, res, next);
        })
        .get('/logout', function (req, res, next) {
            req.session.user = null;
            req.flash('success', '登出成功');
            res.redirect('/');
        })
        .get('/*', function (req, res) {
            res.render('partials/404', { title: '404' });
        });
};