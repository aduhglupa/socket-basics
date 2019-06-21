var socket = io();

var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room') || 'Random Room';

$('.chat-title').text(room);

socket.on('connect', function () {
    console.log('Connect to socket.io server!');

    socket.emit('joinRoom', {
        name: name,
        room: room
    });
});

socket.on('message', function (message) {
    var time = moment(message.timestamp).format('h:mm a');
    var $messages = $('.messages');
    var $message = $('<li>', {
        class: 'list-group-item'
    });

    console.log('New message:');
    console.log(message.text);

    $message.append(`
        <p><strong>${message.name} ${time}</strong></p>
        <p>${message.text}</p>
    `);
    $messages.append($message);
});

// Handle submitting of new form
var $form = $('#message-form');

$form.on('submit', function (e) {
    e.preventDefault();

    socket.emit('message', {
        name: name,
        text: $form.find('input[name=message]').val()
    });

    $form[0].reset();
});