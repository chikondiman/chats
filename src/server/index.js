
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


app.get('/', function(req,res){
    res.send('<h1>Hello chats</h1>');
});

http.listen(3001, function(){
    console.log('listening on *:3001');
});
