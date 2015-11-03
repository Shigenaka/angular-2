// Create application
var dataApp = angular.module('dataApp', []);

// Bind controller customersCtrl
dataApp.controller('customersCtrl', function($scope, $http) {
    $http.get('http://www.w3schools.com/angular/customers.php').then(function successCallback(response) {
        $scope.names = request.data.records;
        console.log(request.data);
    })
})
