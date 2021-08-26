//server.js
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const logo = " \
/ ____/___  ____ ___  ____  ____  ________  _____ \
/ /   / __ \/ __ `__ \/ __ \/ __ \/ ___/ _ \/ ___/ \
/ /___/ /_/ / / / / / / /_/ / /_/ (__  )  __/ / \
\____/\____/_/ /_/ /_/ .___/\____/____/\___/_/ \
                   /_/ \
";



io.on('connection', function (socket){
   console.log('se conecto un nuevo usuario');
   
  socket.on('login', function(data){
    console.log('a user ' + data.userId + ' connected');
    // saving userId to object with socket ID
    // users[socket.id] = data.userId;
  });
  socket.on("disconnect", (reason) => {
    console.log(`se desconecto el cliente ${socket.id} debido a ${reason}`);
  });

  socket.on('CH01', function (from, msg) {
    console.log(from, ' saying: ', msg);
    
    // sending to all clients except sender
    socket.broadcast.emit('echo', msg);
    // io.emit('echo', msg);
   
  });


   // sending to individual socketid (private message)
   // socket.to(<socketid>).emit('hey', 'I just met you');
  
   io.emit('serverWellcome', {
    id: 1,
    text: 'hola Bienvenido desde el servidor',
    author: 'The Server'
  } );

});


http.listen(3000, function () {
  console.log('listening on *:3000');
});