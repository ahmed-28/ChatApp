const express = require("express");
// const cors = require("");
const socketio = require("socket.io");
const http = require("http"); 

const PORT = process.env.PORT||5000;
const app = express(); 
const server = http.createServer(app);
const io = socketio(server,{cors:true,origins:["http://localhost:3001"]});
const router = require("./router");
import {addUser,removeUser,getUser,getUsersInRoom} from './users.js';

io.on('connection', (socket) => {
    console.log("Connection started !!");

    socket.on('join',({name,room},callback)=>{
        const {error,user} = addUser({id:socket.id,name,room});
        console.log(user,error);

        socket.emit('message',{user:'admin',text:`${user.name}, Welcome to the room ${user.room}!`});
        socket.broadcast.to(user.room).emit('message',`${user.name} has joined now !`);

        socket.join(user.room);

        io.to(user.room).emit('roomData',{room:user.room,users:getUsersInRoom(user.room)});

        console.log(name,room);
    });

    socket.on('sendMessage',(message,callback) => {
        const user = getUser(socket.id);
        
        io.to(user.room).emit('message',{user:user.name,text:message});
        io.to(user.room).emit('roomData',{room:user.room,users:getUsersInRoom(user.room)});
        callback(); 
    });
    socket.on('disconnect' , () => {
        const user = removeUser(socket.id);

        if(user){
            io.to(user.room).emit('message',{user:'admin',text:`${user.name} has left.`});
        }
        console.log("user connection ended");
    });

});

app.use(router);


server.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});