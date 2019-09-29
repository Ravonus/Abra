const http = require('http');

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

        client.broadcast.emit('deleteDot', data.gameObject);
        client.emit('deleteDot', data.gameObject);

      });

    });

  }
}