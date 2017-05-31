var authority = {
    isLogin: isLogin,
    isLogout: isLogout
};

function isLogin (req, res, next) {
    if (req.session.user) {
        res.redirect('/');
    } else {
        next();
    }
}
function isLogout (req, res, next) {
    if (!req.session.user) {
        res.redirect('/login');
    } else {
        next();
    }
}

module.exports = authority;