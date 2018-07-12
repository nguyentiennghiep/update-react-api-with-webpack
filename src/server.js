var path    = require("path");

var express = require('express');
var app = express();
var route = express.Router();
app.use(express.static(path.join(__dirname,'..','/dist')));
app.use('/',route);
route.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
})

var server = app.listen(8081);