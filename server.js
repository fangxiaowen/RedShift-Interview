var express = require('express');
var app = express();

//var React = require('react'),
//    ReactDOMServer = require('react-dom/server');

//var Appp = React.createFactory(require('./Appp'));

app.get('/', function (req, res) {

  res.send("hello world");
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})