var http = require('http');
var express = require('express');
var url = require('url')


var https = require('https');
var fs = require('fs');

// var session = require('express-session');
// var FileStore = require('session-file-store')(session);

var print = console.log

var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.set('views', 'public/views');

app.use(express.urlencoded({ extended: true }));
// app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: true }));

var sess = {};
sess.isValid = false;
var server = http.createServer(app);
// var io = socket(server);
// nested sessios
// app.use('/sessions', session({
// 	secret: 'keyboard cat',
// 	store: new FileStore,
// 	resave: false,
// 	saveUninitialized: true,
// 	cookie: { maxAge: 1000 * 60 } //60 sec session
// }))

app.get('/', (req, res) => {
	res.render('index.ejs');

});


app.use((req, res, next) => {
	res.render('404.ejs', { url: req.url });
});



// tu uruchamiamy serwer
server.listen(process.env.PORT || 3000);

console.log('serwer started');
//Lista socketów, chyba się przyda