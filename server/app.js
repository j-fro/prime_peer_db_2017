var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var Assignment = require('./models/assignments');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', (process.env.PORT || 8000));

app.listen(app.get('port'), function() {
    console.log('Listening on port', app.get('port'));
});

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect('mongodb://localhost:27017/assignmentDb');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.post('/assignments', function(req, res) {
    console.log('Adding an assignment:', req.body);
    var newAssignment = Assignment({
        assignment_name: req.body.assignment_name,
        student_name: req.body.student_name,
        score: req.body.score,
        date_completed: req.body.date_completed
    });
    console.log('New assignment:', newAssignment);
    newAssignment.save(function(err) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    }); //end newAssignment
}); // end app.post

app.get('/assignments/:id?', function(req, res) {
    console.log('getting an assignment:', req.params);
    if (req.params.id) {
        Assignment.find({
            _id: req.params.id
        }, function(err, result) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.send(result);
            }
        });
    } else {
        Assignment.find({}, function(err, result) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.send(result);
            }
        });
    }
});

app.delete('/assignments/:id', function (req, res){
    console.log('deleting an assignment:', req.params);
    Assignment.findByIdAndRemove (req.params.id, function(err) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

app.put('/assignments', function (req, res){
    console.log('updating an assignment:', req.body);
    Assignment.findByIdAndUpdate (req.body._id, req.body, function(err) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});
