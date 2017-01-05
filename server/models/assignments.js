var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignmentSchema = new Schema({
    assignment_name: String,
    student_name: { type: String, required: true},
    score: Number,
    date_completed: {type: Date, required: true}
});

var Assignment = mongoose.model('users', assignmentSchema);
module.exports = Assignment;
