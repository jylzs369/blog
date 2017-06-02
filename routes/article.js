var common = require('../public/scripts/common'),
    Post = require('../models/post');

var article = {};

article.get = function (req, res, next) {
    var user = req.session.user;
    var articleId = parseInt(req.params.id);
    Post.article(articleId, function (err, result) {
        var article = result;
        article.time = common.formatDate(article.time);
        res.render('article', { title: '主页', home: true, user: user, article: article });
    });
}

module.exports = article;