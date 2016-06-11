/**
 * Created by tutty on 2016/06/08.
 */

var socket = io();
socket.on("addChild", function(msg) {
    graph.addChild(msg.parent, msg.child);
});
