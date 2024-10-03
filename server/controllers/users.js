const User = require('../models/user');
const passport = require('passport');

module.exports.register = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = new User({
            email: email,
        });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if(err) return next(err);
            res.json(registeredUser)
        })
    } catch(e) {
        if(e.message === "A user with the given username is already registered") {
            res.json({error: 'User exists'})
        } else {
            res.json({error: 'Something went wrong.'})
        }
        console.log(e.message)
    }
}


module.exports.login = async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.log(err)
            return next(err);
        }
        if (!user) {
            console.log('no user')
            return res.json({error: 'email or password incorrect'}); // Redirect or handle the error as needed
        }
        req.logIn(user, (err) => {
            if (err) {
                console.log(err)
                return next(err);
            }
            return res.redirect('/');
        });
    })(req, res, next);
}

module.exports.loggedIn = async (req, res) => {
    if (req.isAuthenticated()) {
        res.send({ loggedIn: true, user: req.user });
    } else {
        res.send({ loggedIn: false });
    }
};

module.exports.logout = async (req, res) => {
    req.logout((err) => {
        if(err) { return next(err)}
        res.clearCookie('session');
        res.send({ loggedIn: false })
    });
}