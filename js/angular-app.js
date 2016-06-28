// create the module and name it scotchApp
var engageApp = angular.module('engageApp', ['ngRoute']);

// configure our routes
engageApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'mainController'
        });
});

// create the controller and inject Angular's $scope
engageApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});