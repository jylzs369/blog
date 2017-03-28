module.exports = function(app) {
    /* GET home page. */
    app.get('/', function(req, res, next) {
            res.render('index', { title: '主页' });
        })
        .get('/reg', function(req, res, next) {
            res.render('reg', { title: '注册' });
        })
        .post('/reg', function(req, res, next) {

        })
        .get('/login', function(reg, res, next) {
            res.render('login', { title: '登录' });
        })
        .post('/login', function(reg, res, next) {

        })
        .get('/post', function(reg, res, next) {
            res.render('post', { title: '发表' });
        })
        .post('/post', function(reg, res, next) {

        })
        .get('/logout', function(reg, res, next) {

        });
};