var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignmentSchema = new Schema({
    assignment_name: String,
    student_name: String,
    score: Number,
    date_completed: Date
});

var Assigment = mongoose.model('users', assignmentSchema);
module.exports = Assigment;
