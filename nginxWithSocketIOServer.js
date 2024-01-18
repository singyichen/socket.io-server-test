const { io } = require('socket.io-client');
// 建立自定義個數量的 Socket.IO 客戶端並監控每秒接收的封包數量
const URL = 'http://192.168.25.180:10000';
// 最大客戶端數量
const MAX_CLIENTS = 10;
// 客戶端創建的間隔時間(毫秒)
const CLIENT_CREATION_INTERVAL_IN_MS = 10;
// 每秒發送封包的間隔時間(毫秒)
const EMIT_INTERVAL_IN_MS = 1000;

let clientCount = 0;
let lastReport = new Date().getTime();
let packetsSinceLastReport = 0;

const createClient = () => {
  const transports = ['websocket'];
  const socket = io.connect(URL, {
    'reconnection delay': 0,
    'reopen delay': 0,
    'force new connection': true,
    // secure: true,
    reconnect: true,
    rejectUnauthorized: false,
    transports,
    forceNew: true,
    path: '/socket/socket.io',
  });
  setInterval(() => {
    socket.emit('client to server event');
  }, EMIT_INTERVAL_IN_MS);

  socket.on('server to client event', () => {
    // // 當接收到該事件時，計算收到的封包數量。
    // packetsSinceLastReport++;
    console.log(`server to client event`);
  });
  socket.emit('echo');
  socket.on('echo', (message) => {
    console.log(message);
    packetsSinceLastReport++;
  });
  socket.on('disconnect', (reason) => {
    console.log(`disconnect due to ${reason}`);
  });

  if (++clientCount < MAX_CLIENTS) {
    setTimeout(createClient, CLIENT_CREATION_INTERVAL_IN_MS);
  }
};

createClient();

const printReport = () => {
  const now = new Date().getTime();
  const durationSinceLastReport = (now - lastReport) / 1000;
  // 監控每秒收到的封包數量
  const packetsPerSeconds = (
    packetsSinceLastReport / durationSinceLastReport
  ).toFixed(2);

  console.log(
    `client count: ${clientCount} ; average packets received per second: ${packetsPerSeconds}`,
  );

  packetsSinceLastReport = 0;
  lastReport = now;
};

setInterval(printReport, 5000);
