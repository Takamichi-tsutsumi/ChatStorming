var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.set('views', __dirname+'/views');

app.get('/', function (req, res) {
    res.render('index');
});

var server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('authors listening at http://%s:%s', host, port);
});