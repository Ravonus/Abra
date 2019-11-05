

let room = data.room;

if(io.rooms && io.rooms[room]) {


let playerName = io.rooms[room].users[client.id].name,
ready = data.ready;


io.rooms[room].users[client.id].ready = ready;

io.to(room).emit('readyUp', {player:playerName, ready});

}

// client.broadcast.emit('joinGame', io.rooms[room].names);
// client.emit('joinGame', io.rooms[room].names);
