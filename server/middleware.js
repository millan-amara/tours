const User = require('./models/user');

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl;
        return res.redirect('/login');
    }
    next();
}

module.exports.isAdmin = async (req, res, next) => {
    const id = req.user._id;
    const user = await User.findById(id);
    if(!user.isAdmin) {
        return res.json({ error: "not authorized to do that" });
    }
    next();
}