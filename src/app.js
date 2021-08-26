const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000', {reconnect: true});
//let socket = io.connect("http://54.144.208.212:3000/");
let mensaje = '';
let userName = 'Luigo';

readline.on('line', (line) => {
    mensaje = line;
    socket.emit('CH01', userName, mensaje);
})


socket.on('connect', function () {
    data = {name: userName, userId: socket.id};
    socket.emit('login',data);
});

socket.on('serverWellcome', function (data) {
    console.log(data);
});

socket.on('echo', function (data) {
    console.log(data);
});
