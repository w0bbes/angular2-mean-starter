'use strict';

var express     = require("express"),
    app         = express(),
    bodyParser  = require('body-parser'),
    morgan      = require("morgan"),
    mongoose    = require("mongoose"),
    config      = require("./config/config");

var port = process.env.PORT || 8080,
    env = process.env.NODE_ENV || 'development';

if (env == 'development') {
  // All code depending on the environment here
  // You can put morgan here for example
}

mongoose.connect(config.mongoURL);

app.use( morgan("dev") );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/public'));

require('./app/routes/routes')(app);

app.listen(port);

console.log('Magic happens on port ' + port);
