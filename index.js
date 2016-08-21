var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/', function(req, res) {
    console.log(req.body);
    // var ip = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;
    // console.log(ip);
    res.send('success');
});

io.on('connection', function() {
    /* … */
});

server.listen(3000);