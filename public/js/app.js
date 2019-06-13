var socket = io();

socket.on('connect', function () {
    console.log('Connect to socket.io server!');
});