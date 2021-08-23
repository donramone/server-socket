const io = require("socket.io-client");

let games = io.connect("http://localhost:3000/games");

games.on("welcome", (msg) => {
    console.log("recibido ", msg);
})