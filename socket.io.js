const fs = require('fs');


module.exports = {

  socket: (io) => {

    io.on('connection', (client) => {

      client.emit('connected', 'connected');

      console.log(__dirname)

      let socketScripts = fs.readdirSync(`${__dirname}/sockets`);



      socketScripts.forEach( async (file) => {

        let contents = await fs.readFileSync(`${__dirname}/sockets/${file}`, 'utf8');

        console.log(file.slice(0, -3))

        client.on(file.slice(0, -3), (data) => eval(contents))

      })


      client.on('disconnect', () => {

        console.log('disconnected')

      });

      client.on('connected', function (data) {

        client.emit('connected', 'connected');


      });

      client.on('deleteDot', function (data) {

        client.broadcast.emit('deleteDot', data);
        client.emit('deleteDot', data);

      });

      client.on('grow', function (data) {

        client.broadcast.emit('grow', data);
        client.emit('grow', data);

      });

      // client.on('joinGame', (data) => {

      //   var room = data.room;

      //   var rooms = io.sockets.adapter.rooms;

      //   Object.keys(rooms).forEach(key => {

      //     if (key === client.id || key === room) return;

      //     var sockets = Object.keys(rooms[key].sockets);

      //     if (sockets.includes(client.id)) {

      //       if (sockets.length === 1) delete io.rooms[key];

      //       client.leave(key);

      //     };

      //   });


      //   if (!io.rooms) io.rooms = {};
      //   if (!io.rooms[room]) io.rooms[room] = { users: [client.id] };

      //   //TODO: PUSH HERE HAHAHAH

      //   client.join(room);

      //   client.broadcast.emit('joinGame', io.rooms[room].users);
      //   client.emit('joinGame', io.rooms[room].users);        


      // });

    });

  }

}