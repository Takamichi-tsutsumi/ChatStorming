const express = require('express');
const app = express();

app.set('view engine', 'jade');
app.set('views', __dirname);
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {'env': app.get('env')});
});

const server = app.listen(3001, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('authors listening at http://%s:%s', host, port);
});