let socket = io()

$(function () {

    let containerLogin = $('#login')
    let containerChat = $('#chatbox')

    containerChat.hide()

    let btnLogin = $('#btn-login')
    let btnSend = $('#btn-send')
    let inpUsername = $('#inp-username')
    let inpMsg = $('#inp-msg')
    let listChats = $('#chatlist')

    btnLogin.click(() => {
        socket.emit('login', {
            username: inpUsername.val()
        })
    })
    socket.on('logged_in', (data) => {
        if (data.success) {
            containerChat.show()
            containerLogin.hide()
        }
    })

    btnSend.click(() => {
        socket.emit('chat', {
            message: inpMsg.val()
        })
    })

    socket.on('chat', (data) => {
        let cardExtraClass = (data.private)
        ? 'text-white bg-info'
        : ''
        listChats.append(
            $(
                `
            <div class="card ${cardExtraClass} col-12">
                <div class="card-body">
                    <div class="card-title">${data.sender}</div>
                    <div class="card-subtitle text-muted small">${data.timestamp}</div>
                    <div class="card-text">${data.message}</div>
                </div>
            </div>
                `
            )
        )
    })



})