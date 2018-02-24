const LocalStrategy = require('passport-local').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const TwitterStrategy = require('passport-twitter').Strategy
const User = require('../db/models').User


const facebookStrategy = (new FacebookStrategy({
        clientID: '1948005882182736',
        clientSecret: 'ab41d2b9fa2279b311fb8921dd04f0ca',
        callbackURL: "http://localhost:3232/views/premium"
    },
    function (accessToken, refreshToken, profile, cb) {
        User.findOrCreate({facebookId: profile.id}, function (err, user) {
            return cb(null, user);
        });
    }
));
const twitterStrategy = (new TwitterStrategy({
        consumerKey: '0GMmQ8zZ949pIlgbHGw8n4KFa',
        consumerSecret: 'rs4e1CXqiwaXGRnqXYiaF5OHwxaHEVcsCPjVnBnU8UU1WDI9KZ',
        callbackURL: "http://127.0.0.1:3232/views/premium"
    },
    function(token, tokenSecret, profile, cb) {
        User.findOrCreate({ twitterId: profile.id }, function (err, user) {
            return cb(null, user);
        });
    }
));

const localStrategy = new LocalStrategy(
    (username, password, done) => {
        User.findOne({
            where: {
                username: username
            }
        }).then((user) => {

            if (!user) {
                //Wrong username
                return done(null, false, {message: 'Wrong username'})
            }
            if (user.password === password) {
                // Correct user and password
                return done(null, user)
            } else {
                // Correct username, wrong password
                return done(null, false, {message: 'Wrong password'})
            }

        }).catch((err) => {
            return done(err)
        })
    })

exports = module.exports = {
    localStrategy, facebookStrategy, twitterStrategy
}
