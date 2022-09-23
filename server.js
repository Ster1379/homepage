const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});
//--------------------------------------------
var PORT = process.env.PORT || 5056;


let groups = [];
io.on('connection', (socket) => {
    console.log('A user connected: ' + socket.id);
    socket.on('groupinfo', function(group){
        socket.join(group);
        groups.push({gameName: group, connectionID: socket.id});
    console.log('joined room', group);
    console.log('ROOMS', groups);

    io.in(group).emit('groupMembers',groups);
    
    socket.on('gameList', function(data,G11,G22,G33,G44,G55,G66,G77,G88,G99){
        console.log('info recd', data,G11,G22,G33,G44,G55,G66,G77,G88,G99);
        io.in(group).emit('gameList',data,G11,G22,G33,G44,G55,G66,G77,G88,G99);
    })

    

    socket.on('disconnect', function(){
        console.log('A user disconnected: ' + socket.id);

        let removeIndex = groups.map(function(item){return item.connectionID;}).indexOf(socket.id);
        groups.splice(removeIndex,1);

        let ctr2 = 0;
        for (let i=0; i < groups.length; i++)  {
            if (groups[i].gameName === group) {
                ctr2++
            }
        }
//--------------
        io.in(group).emit('groupMembers',groups);

    });
    });
});


http.listen(PORT, async() => {
    try{
    console.log('Server is listening on port localhost:5056');
    } catch (e) {
        console.error(e);
    }
});
