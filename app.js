var express = require('express');
var compression = require('compression');
var pug = require('pug');
var livereload = require('express-livereload');
var http = require('http');

var port = 8080;
var app = express();


app.use(compression());
app.use(express.static('dist'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index.pug', {});
});

livereload(app, {watchDir: process.cwd()+'/assets'})

var server = http.createServer(app);

server.listen(port, _ => console.log(`listening on port ${port}`));
