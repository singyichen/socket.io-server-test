const socketIO = require('socket.io');
const socketApi = require('../src/api');
module.exports = function (server) {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('socket io server connected');

    // API
    socketApi.socketApi(socket);

    socket.on('disconnect', function () {
      console.log('socket io server disconnected');
    });
  });

  return io;
};
