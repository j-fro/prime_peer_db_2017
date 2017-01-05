var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.set('port', (process.env.PORT || 8000));

app.listen(app.get('port'), function() {
    console.log('Listening on port', app.get('port'));
});
