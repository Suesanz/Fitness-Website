const route = require('express').Router()
const User = require('../db/models').User
const passport = require('../passport')

route.get('/signin', (r,s) => s.render('signin'))
route.get('/signup', (r,s) => s.render('signup'))

route.post('/signup', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    }).then((user) => {
        res.redirect('/user/signin')
    })
})
route.get('/auth/facebook',
    passport.authenticate('facebook'));

route.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/user/signin' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/pages/premium');
    });
route.get('/signin', passport.authenticate('local', {
    successRedirect: '/views/premium',
    failureRedirect: '/user/signin'
}))

exports = module.exports = route