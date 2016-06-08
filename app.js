const express = require('express');
const app = express();
const http = require('http').Server(app);
const sio = require('./models/sio.js');

app.set('view engine', 'jade');
app.set('views', __dirname);
app.use(express.static(__dirname + '/public'));

http.listen(3001, function() {
  console.log('server is listening on port 3001');
});

app.get('/', (req, res) => {
  res.render('index', {'env': app.get('env')});
});


// socket.io
sio(http);
