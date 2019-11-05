var room = data.room;
var type = data.type;

io.to(client.id).emit('hostCheck', {host:io.rooms[room].users[client.id].host, type});
