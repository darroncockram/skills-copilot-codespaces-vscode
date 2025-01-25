// Create web server for comments
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname + '/public'));

app.get('/comments', function (req, res) {
    fs.readFile('comments.json', 'utf8', function (err, data) {
        res.end(data);
    });
});

app