
//its a built in module we dont need to intsall it using npm i
const path = require('path');

const express = require('express');
//just for testing
const port = process.env.PORT || 3000;
var app = express();

var publicpath = path.join(__dirname,'../public');
app.use(express.static(publicpath));

app.listen(port, () => {
  console.log('Server is up on port 3000');
});
