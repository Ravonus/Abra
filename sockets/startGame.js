var room = data.room;
var type = data.type;

if(io.rooms[room].users[client.id].host)
io.to(room).emit('startGame', true);
