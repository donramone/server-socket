const express = require("express");
const app = express();
const PORT = 3000;
const http = require("http").createServer();
const io = require("socket.io")(http);
/*
io.on("connection", (socket) => {
    console.log("este es el IO ",io);
    socket.emit("welcome", "Bienvenidossss chamigossss");
});
*/

// probar despues private msg
io.of("/test")
.on("connection", (socket) => {
    socket.emit("welcome", "Bienvenido, te conectaste a la ruta del test!!!");
});

http.listen(PORT, () =>{
    console.log("Server is listening on localhost:3000");
});