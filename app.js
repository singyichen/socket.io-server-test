const fastify = require('fastify');
const { readFileSync } = require('fs');
const { createServer } = require('https');
// socket io https api
const socketIO = require('./src/socketIO');
require('dotenv').config();
// 將 fastify 放進 https 中開啟 Server 的 SOCKET_IO_PORT
const server = createServer(
  {
    key: readFileSync('./src/ssl/192.168.25.180.key'),
    cert: readFileSync('./src/ssl/192.168.25.180.crt'),
    requestCert: false,
    rejectUnauthorized: false,
  },
  fastify,
);
const io = new socketIO(server, {
  cors: {
    origin: ['http://192.168.25.180', 'https://192.168.25.180'], // nginx server ip
  },
  path: '/socket/socket.io', // socket io path
});
server.listen(process.env.SOCKET_IO_PORT, function (err) {
  console.log(
    `Welcome to socket io server listening at https://${process.env.IP_ADDRESS}:${process.env.SOCKET_IO_PORT}`,
  );
  if (err) {
    console.log(err);
  }
});

module.exports.io = io;
module.exports.server = server;
