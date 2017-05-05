// Contains all routes needed for the app
'use strict'
var express = require('express');

module.exports = function(app){

    // Used to get the directiory name
    var dirname = __dirname.slice(0, (__dirname.length - 10));
    app.get('/', function(req, res) {
        res.sendFile(dirname + 'public/views/index.html');
    }); 

    // Routes for getting assets
    app.use('/js', express.static(dirname + "app/client/"));
    app.use('/css', express.static(dirname + "public/css/"));
    app.use('/swal', express.static(dirname + "node_modules/sweetalert/dist/"));
    app.use('/modules', express.static(dirname + "node_modules/"));
    app.use('/assets', express.static(dirname + "public/assets/"));
    app.use('/libs', express.static(dirname + "public/js/"));
    app.use('/assets', express.static(dirname + "/public"))

}