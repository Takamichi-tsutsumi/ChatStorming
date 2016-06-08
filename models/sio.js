/**
 * Created by tutty on 2016/06/09.
 */
const socketio = require('socket.io');

module.exports = sio;

function sio(http) {
  const io = socketio(http);
  io.on('connection', function(socket) {
    console.log('connected to socket.io');

    socket.broadcast.emit('chat message', 'hello from client');

  });
}
