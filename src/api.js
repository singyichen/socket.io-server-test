/**
 * @description socket api
 */
async function socketApi(socket) {
  try {
    socket.on('echo', function () {
      socket.emit('echo', 'Hello World');
    });
  } catch (error) {
    console.error(`Socket.IO error：`, error);
  }
}
module.exports = { socketApi };
