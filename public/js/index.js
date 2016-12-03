var socket = io();

//connects with server using connect method

socket.on('connect', function(){
console.log('connected to server');

socket.emit('CreateEmail' ,  {
to : "LokeshReddy@abc.com",
text : "hello im going to server"

});

//emiting create message to from client to server
socket.emit('createmessageEvent', {
  from : "hey this is creating message event",
  text : "Server listens me!!!"
});

});

//to listen
socket.on('newmessageEvent' , function(messagefromserver) {
console.log('listening message  from server',messagefromserver);
})

socket.on('disconnect',function() {
  console.log('disconnected from the server');
});

//to listen from server
socket.on('newEmail',function(email) {
  console.log('new email',email);
});
