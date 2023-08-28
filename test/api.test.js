const io = require('socket.io-client');
// server
const server = require('../app').server;
const serverSocket = require('../app').io;
let serverAddr;
// client
let clientSocket;
/**
 * Setup WS & HTTP servers
 */
beforeAll((done) => {
  serverAddr = server.address();
  done();
});

/**
 *  Cleanup WS & HTTP servers
 */
afterAll((done) => {
  serverSocket.close();
  server.close();
  done();
});

beforeEach((done) => {
  // Setup
  clientSocket = io.connect(
    `http://[${serverAddr.address}]:${serverAddr.port}`,
    {
      'reconnection delay': 0,
      'reopen delay': 0,
      'force new connection': true,
      transports: ['websocket'],
    },
  );
  clientSocket.on('connect', () => {
    done();
  });
});

afterEach((done) => {
  // Cleanup
  if (clientSocket.connected) {
    clientSocket.disconnect();
  }
  done();
});
/**
 * @description unit test for socket io server
 */
describe(`Test socket io server`, () => {
  test(`Test socket io server should communicate when Server emit event echo with eventMessageFromServer Hello World, Client should listen event echo with eventMessageFromServer Hello World`, (done) => {
    // Arrange
    const event = 'echo';
    const eventMessageFromServer = 'Hello World';

    // Act
    serverSocket.emit(event, eventMessageFromServer);

    // Assert
    clientSocket.once(event, (message) => {
      expect(message).toBe(eventMessageFromServer);
      done();
    });
  });
  test(`Test socket io server should communicate when Client emit event echo with eventMessageFromClient Hello World, Client should listen event echo with eventMessageFromServer Hello World`, (done) => {
    // Arrange
    const event = 'echo';
    const eventMessageFromClient = 'Hello World';
    const eventMessageFromServer = 'Hello World';

    // Act
    clientSocket.emit(event, eventMessageFromClient);

    // Assert
    clientSocket.once(event, (message) => {
      expect(message).toBe(eventMessageFromServer);
      done();
    });
  });
});
