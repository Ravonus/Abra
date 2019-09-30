
module.exports = {

  socket: (io) => {

    io.on('connection', (client) => {

      client.emit('connected', 'connected');

      client.on('disconnect', () => {

        console.log('disconnected')

      });

      client.on('connected', function (data) {

        client.emit('connected', 'connected');
       

      });

      client.on('deleteDot', function (data) {

        console.log(data);

        client.broadcast.emit('deleteDot', data);
        client.emit('deleteDot', data);

      });


      client.on('grow', function (data) {

        console.log(data);

        client.broadcast.emit('grow', data);
        client.emit('grow', data);

      });

    });

  }
}