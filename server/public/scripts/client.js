var myApp = angular.module('myApp',[]);
myApp.controller('AssignmentController', ['$scope', '$http', function($scope, $http){
    console.log('NG');
    $scope.assigments=[];
    $scope.submitAssignment= function() {
        console.log('in submitAssignment()');
        var assignment = {
            assignment_name: $scope.assignmentInput,
            student_name:$scope.studentName,
            score: $scope.score,
            date_completed: $scope.dateCompleted
        }; //end assignment obj
        $http.post('/assignments', assignment).then(function(response){
            console.log('response', response);
            $scope.getAssignments();
        });//end $http
    }; // end submitAssignment

    $scope.getAssignments = function() {
        $http.get('/assignments').then(function(response) {
            $scope.assignments = response.data;
            $scope.allAssignments = response.data;
            console.log('Assignments', $scope.assignments);
        });
    };

    $scope.getAssignments();

    $scope.showOneAssignment = function() {
        console.log('showing one assignment', $scope.selectedAssignment);
        $http.get('/assignments/' + $scope.selectedAssignment).then(function(response) {
            $scope.assignments = response.data;
        });
    };

    $scope.deleteAssignment= function(assignment) {
        console.log('in delete Assignment', assignment);
        $http.delete('/assignments/' + assignment._id).then(function(response){
            $scope.getAssignments();
        });//end delete
    };// end deleteAssignment

    $scope.updateAssignment= function(assignment) {
        console.log('in update Assignment', assignment);
        $http.put('/assignments/' + assignment._id).then(function(response){
            $scope.getAssignments();
        });//end update
    };// end updateAssignment

}]);// end controller
