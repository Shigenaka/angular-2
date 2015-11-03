// Create application
var madApp = angular.module('madApp', []);

// Bind controller madCtrl
madApp.controller('madCtrl', function($scope) {

    // Set initial values for name, age, location, and food
    $scope.name = 'Shig';
    $scope.age = '20';
    $scope.location = 'Seattle';
    $scope.food = 'Sushi';
})

