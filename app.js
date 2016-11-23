// JavaScript source code
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Practice Website!');
})

app.listen(8000, function () {
    console.log('Practice website up and running on your machine!');
})
