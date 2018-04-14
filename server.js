const express = require('express')
const session = require('express-session')
const app = express()
const passport = require('./passport')
const SERVER_PORT=process.env.Port || 2323
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', express.static(__dirname + '/views'))
app.use('/views/premium', express.static(__dirname + '/views'))
app.use('/user/signup', express.static(__dirname + '/views'))
app.use('/user/signin', express.static(__dirname + '/views'))
app.use(session({
    secret: 'some very secret thing',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.set('view engine', 'hbs')
app.use('/user/login/fb',require('./routes/user'))
app.use('/user/login/twitter', require('./routes/user'))
app.use('/user/signin',require('./routes/user'))
app.use('/user', require('./routes/user'))
app.use('/pages', require('./routes/pages'))
app.use('/user/premium',require('./routes/user'))
app.get('/', (r, s) => s.render('guest'))

app.use('/ss',require('./routes/user'))
const http = require('http')
// const socketio = require('socket.io')
//
// const server = http.createServer(app)
// const io = socketio(server)
//
// let socketIdName = {}
//
// io.on('connection', function (socket) {
//     console.log('Socket connected ' + socket.id)
//
//     socket.on('login', (data) => {
//         socketIdName[socket.id] = data.username
//         socket.join(data.username)
//
//         socket.emit('logged_in', {
//             username: data.username,
//             success: true
//         })
//     })
//
//     socket.on('chat', (data) => {
//         if (socketIdName[socket.id]) {
//
//             if (data.message.charAt(0) === '@') {
//
//                 let recipient = data.message.split(' ')[0].substring(1)
//
//                 io.to(recipient).emit('chat', {
//                     private: true,
//                     sender: socketIdName[socket.id],
//                     message: data.message,
//                     timestamp: new Date()
//                 })
//
//             } else {
//                 socket.broadcast.emit('chat', {
//                     sender: socketIdName[socket.id],
//                     message: data.message,
//                     timestamp: new Date()
//                 })
//             }
//
//
//         }
//     })
//
//
// })
//

app.use('/premium/chat', express.static(__dirname + '../views/Sockets/public'))
app.get('/premium/chat', (req, res) => {
    res.render('../views/Sockets/public/index')
})

app.listen(SERVER_PORT)