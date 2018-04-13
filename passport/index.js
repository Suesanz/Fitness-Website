const passport = require('passport')
const strategies = require('./strategies')
const User = require('../db/models').User

passport.use(strategies.localStrategy)
passport.use(strategies.facebookStrategy)
passport.use(strategies.twitterStrategy)

passport.serializeUser(function (user, done) {
    console.log('serialize' + user.id)
    done(null, user.id)
})

passport.deserializeUser(function (userId, done) {
    console.log('deserialize' + userId)

    User.findOne({
        where: {id: userId}
    })
        .then((user) => done(null, user))
        .catch((err) => done(err))
})

exports = module.exports = passport