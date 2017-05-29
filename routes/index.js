var register = require('./register.js'),
    login = require('./login.js'),
    publish = require('./publish.js');

module.exports = function(app) {
    /* GET home page. */
    app.get('/', function(req, res, next) {
            var user = req.session.user || null;
            res.render('index', { title: '主页', home: true, user: user });
        })
        .get('/register', function(req, res, next) {
            register.get(req, res, next);
        })
        .post('/register', function(req, res, next) {
            register.post(req, res, next);
        })
        .get('/login', function(req, res, next) {
            login.get(req, res, next);
        })
        .post('/login', function(req, res, next) {
            login.post(req, res, next);
        })
        .get('/publish', function(req, res, next) {
            publish.get(req, res, next);
        })
        .post('/publish', function(req, res, next) {
            publish.post(req, res, next);
        })
        .get('/logout', function(req, res, next) {
            req.session.user = null;
            req.flash('success', '登出成功');
            res.redirect('/');
        });
};