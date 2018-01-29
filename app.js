var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var employeeRoutes = require('./routes/employee');

var app = express();
//mongoose.connect('localhost:27017/restapi_test');
mongoose.connect(process.env.MONGODB_URI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/employees', employeeRoutes);

module.exports = app;
