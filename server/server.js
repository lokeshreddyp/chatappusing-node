
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

// //sending data from server to client
// socket.emit('newEmail' , {
//   From : "lokesh@gmail.com",
//   text : "hai wassup man!!",
//    CreatedAt : 123
//  });


// socket.emit('newmessageEvent', {
//   From : "lokesh@message.com",
//   text : "Meet me at 6 pm!!",
//    CreatedAt : 123
// });

// //
// socket.on('CreateEmail', (serverreceive)=> {
//   console.log('new mail created',serverreceive);
// })

socket.on('createmessageEvent' , (listeningcreate_messageevent) => {
console.log('listeningcreate_messageevent' ,listeningcreate_messageevent);
//io.emit emits data to all open connections(broadcasting)
//when we type socket.emit('createmessageEvent' , {x : 'plr' , y : 'hehe it worked!!'}); then it will be displayed
//to all the connections even i
//x and y are valued passed as arguments fromcreatemessageEvent
io.emit('newmessageEvent' , {
  from : listeningcreate_messageevent.x,
  text : listeningcreate_messageevent.y,
   CreatedAt : new Date().getTime()
});
});

//disconnects with client ..when browser is closed
socket.on('disconnect',() => {
  console.log('browser is closed!!!');
})
});

server.listen(port, () => {
  console.log('Server is up on port 3000');
});
