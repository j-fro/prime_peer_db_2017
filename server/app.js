var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var Assignment = require('./models/assignments');

var app = express();

app.use(bodyParser.json());

app.set('port', (process.env.PORT || 8000));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/views/index.html'));
});



app.post('/assignments', function(req, res) {
    console.log('Adding an assignment:', req.body);
    var newAssignment = Assignment({
        assignment_name: req.body.assignmentName,
        student_name: req.body.studentName,
        score: req.body.score,
        date_completed: req.body.dateCompleted
    });
    console.log('New assignment:', newAssignment);
});

app.listen(app.get('port'), function() {
    console.log('Listening on port', app.get('port'));
});
