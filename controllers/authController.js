module.exports.signup_get = (req, res, next) => {
    res.render('signup');
};

module.exports.login_get = (req, res, next) => {
    res.render('login');
};

module.exports.signup_post = (req, res, next) => {
    res.send('signup post');
}

module.exports.login_post = (req, res, next) => {
    res.send('login post');
};