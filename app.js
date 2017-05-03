'use strict'

var express = require('express');
var app = express();
var port = process.env.PORT || 3000

// Use different file to store all of our routes
require('./app/server/routes.js')(app);

app.listen(port, function(req, res) {
    console.log("I\'m listening on port: " + port);
});
