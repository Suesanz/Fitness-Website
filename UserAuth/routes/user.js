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
route.post('/views/signin', passport.authenticate('local', {
    successRedirect: '/pages/profile',
    failureRedirect: '/user/signin'
}))

exports = module.exports = route