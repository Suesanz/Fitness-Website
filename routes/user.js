const route = require('express').Router()
const User = require('../db/models').User
const passport = require('../passport')

route.get('/signin', (r, s) => s.render('signin'))
route.get('/signup', (r, s) => s.render('signup'))
route.get('/premium',(r,s)=>s.render('premium'))
route.get('/macros',(r,s)=>s.render('./macros/macros'))
route.get('/bmi',(r,s)=>s.render('./bmi/bmi'))

route.post('/signup', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    }).then((user) => {
        res.redirect('/user/signin')
    })
})
route.get('/login/twitter',
    passport.authenticate('twitter'));

route.get('/login/twitter/callback',
    passport.authenticate('twitter', {failureRedirect: '/user/signin'}),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/user/premium');
    });
route.get('/login/fb',
    passport.authenticate('facebook'));

route.get('/login/fb/callback',
    passport.authenticate('facebook', {failureRedirect: '/user/signin'}),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/user/premium');
    });
route.get('/signin', passport.authenticate('local', {
    successRedirect: '/user/premium',
    failureRedirect: '/user/signin'
}))

exports = module.exports = route