const WebSocketServer = new require('ws');

// подключенные клиенты
var clients = {};
let currentId = 1;

// WebSocket-сервер на порту 8080
const webSocketServer = new WebSocketServer.Server({port: 8080});

webSocketServer.on('connection', function(ws) {
  const id = currentId++;
  clients[id] = ws;
  console.log("новое соединение " + id);

  ws.on('message', function(message) {
    console.log('получено сообщение ' + message);
    for(const key in clients) {
      clients[key].send(message);
    }
  });

  ws.on('close', function() {
    console.log('соединение закрыто ' + id);
    delete clients[id];
  });

});

console.log("Сервер запущен на порту 8080");