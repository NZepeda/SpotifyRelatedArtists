'use strict'

var express = require('express');
var app = express();

//used to get the directiory name
var dirname = __dirname.slice(0, (__dirname.length - 3));
app.get('/', function(req, res){
	res.sendFile(dirname + 'public/views/index.html');
});


app.use('/js', express.static(dirname + "public/js/"));
app.use('/css', express.static(dirname + "public/css/"));
app.use('/swal', express.static(dirname + "node_modules/sweetalert/dist/"));
app.use('/pics', express.static(dirname + "public/assets/"))

// logging middleware
var num = 0;
app.use(function (req, res, next) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var method = req.method;
    var url = req.url;

    console.log((++num) + ". IP " + ip + " " + method + " " + url);
    next();
});

var port = process.env.PORT || 3000
app.listen(port, function(req, res){
	console.log("I\'m listening");
});
