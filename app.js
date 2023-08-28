const fastify = require('fastify');
const http = require('http');
// socket io api
const socketIO = require('./src/socketIO');
require('dotenv').config();

const server = http.Server(fastify);
const io = new socketIO(server);
server.listen(process.env.SOCKET_IO_PORT, function (err) {
  console.log(
    `Welcome to socket io server listening at http://${process.env.IP_ADDRESS}:${process.env.SOCKET_IO_PORT}`,
  );
  if (err) {
    console.log(err);
  }
});

module.exports.io = io;
module.exports.server = server;
