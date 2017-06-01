var article = {};

article.get = function (req, res, next) {
    var articleId = req.params.id;

    Post.article(articleId, function (err, result) {
        var article = result;
        res.render('index', { title: '主页', home: true, user: user, article: article });
    });
}

module.exports = article;