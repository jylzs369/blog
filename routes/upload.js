var fs = require('fs');

var upload = {};

upload.get = function (req, res, next) {
    var user = req.session.user;
    res.render('upload', { title: '文件上传', upload: true, user: user });
}

upload.post = function (req, res, next) {
    console.log(req.files);
    for (var i = 0; i < req.files; i++) {
        if (req.files[i].size == 0) {
            fs.unlinkSync(req.files[i].path);
        } else {
            var path = './public/images/' + req.files[i].name;
            fs.renameSync(req.files[i].path, path);
        }
    }
    res.send({
        'status': 'success',
        'message': '上传成功'
    });
}

module.exports = upload;