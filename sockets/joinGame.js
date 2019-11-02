let room = data.room,
name = data.name,
rooms = io.sockets.adapter.rooms;

if (!io.rooms) io.rooms = {};

Object.keys(rooms).forEach(key => {

  if (key === client.id || key === room) return;

  var sockets = Object.keys(rooms[key].sockets);

  if (sockets.includes(client.id)) {

    if (sockets.length === 1) delete io.rooms[key];

    else {

      
      io.rooms[key].names = io.rooms[key].names.filter(e => e !== io.rooms[key].users[client.id].name);
      io.rooms[key].count = io.rooms[key].count--;

      delete io.rooms[key].users[client.id];

      console.log("RAN ", key)
      io.to(key).emit('joinGame', io.rooms[key].names);

    }
    client.leave(key);

  };

});

client.join(room);

if (!io.rooms[room]) {

  io.rooms[room] = { users: { [client.id]: { name, host: true } } };
  io.rooms[room].count = 1;
  io.rooms[room].names = [name];

} else if (!io.rooms[room].users[client.id]) {

  console.log("RANz")

  io.rooms[room].users[client.id] = { name, host: false };
  io.rooms[room].count = io.rooms[room].count++;
  io.rooms[room].names.push(name);

};


io.to(room).emit('joinGame', io.rooms[room].names);

// client.broadcast.emit('joinGame', io.rooms[room].names);
// client.emit('joinGame', io.rooms[room].names);
