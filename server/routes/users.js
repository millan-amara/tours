const express = require('express');
const router = express.Router();
const passport = require('passport');
const users = require('../controllers/users');
const { isLoggedIn } = require('../middleware');

// router.post('/users/forgot', users.forgot);
// router.post('/users/reset/:token', users.reset);

router.route('/register')
    .post(users.register);

router.post('/login', users.login);

// router.get('/logged-in', users.loggedIn);
// router.get('/logout', isLoggedIn, users.logout);

// router.put('/users/:id', isLoggedIn, users.updateUser);


module.exports = router;