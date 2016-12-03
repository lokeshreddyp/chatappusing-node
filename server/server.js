
//its a built in module we dont need to intsall it using npm i
const path = require('path');
const socketIo = require('socket.io');
const http = require('http');
const express = require('express');

const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIo(server);
var publicpath = path.join(__dirname,'../public');
app.use(express.static(publicpath));

//connects wit client
io.on('connect',(socket) => {
console.log("hello new user is connected using connect method");


//disconnects with client ..when browser is closed
socket.on('disconnect',() => {
  console.log('browser is closed!!!');
})
});

server.listen(port, () => {
  console.log('Server is up on port 3000');
});
