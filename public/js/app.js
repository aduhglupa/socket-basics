var socket = io();

socket.on('connect', function () {
    console.log('Connect to socket.io server!');
});

socket.on('message', function (message) {
    console.log('New message:');
    console.log(message.text);

    $('.messages').append('<p>' + message.text + '</p>');
});

// Handle submitting of new form
var $form = $('#message-form');

$form.on('submit', function (e) {
    e.preventDefault();

    socket.emit('message', {
        text: $form.find('input[name=message]').val()
    });

    $form[0].reset();
});