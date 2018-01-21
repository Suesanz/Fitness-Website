const express = require('express')
const session = require('express-session')
const app = express()
const passport = require('./passport')

// const calcBmi = require('bmi-calc')
// console.log( calcBmi(154, 72, true) )
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: 'some very secret thing',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
app.use('/',express.static(__dirname+'/views'))
app.set('view engine', 'hbs')

app.use('/user', require('./routes/user'))
app.use('/pages', require('./routes/pages'))
app.get('/',(req,res)=>{
    res.render('guest')
})
app.listen(3232)