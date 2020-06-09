const express = require("express");
// const cors = require("");
const socketio = require("socket.io");
const http = require("http"); 


const PORT = process.env.PORT||5000;
const app = express(); 
const server = http.createServer(app);
const io = socketio(server,{cors:true,origins:["http://localhost:3001"]});
const router = require("./router");

io.on('connection', (socket) => {
    console.log("Connection started !!");
    console.log("hi show me changes vs code");
    socket.on('disconnect' , () => {
        console.log("user connection ended");
    });
});

app.use(router);


server.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})