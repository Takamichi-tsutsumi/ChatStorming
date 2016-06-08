/**
 * Created by tutty on 2016/06/08.
 */

var socket = io();
socket.on("news", function(msg) { console.log(msg) });

socket.on('chat message', function(msg) {
  console.log(msg);
});

