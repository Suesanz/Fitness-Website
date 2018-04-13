const route = require('express').Router()

route.get('/guest', (r,s) => s.render('guest'))

route.get('/premium', (req, res) => {
    if (req.user) {
        return res.render('premium')
    }
    res.redirect('/user/signin')
})

route.get('/profile', (req, res) => {
    if (req.user) {
        return res.render('profile', {user: req.user})
    }
    res.redirect('/user/signin')
})


exports = module.exports = route