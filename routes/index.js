var register = require('./register.js'),
    login = require('./login.js');

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
        .get('/post', function(req, res, next) {
            res.render('post', { title: '发表', post: true });
        })
        .post('/post', function(req, res, next) {

        })
        .get('/logout', function(req, res, next) {
            req.session.user = null;
            req.flash('success', '登出成功');
            res.redirect('/');
        });
};