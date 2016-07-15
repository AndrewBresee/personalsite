  var myApp = angular.module('myPage', ['ngRoute']);

// configuring navbar https://scotch.io/tutorials/single-page-apps-with-angularjs-routing-and-templating
    myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
        when('/', {
            templateUrl: 'part.html',
            controller: 'MyCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

  	myApp.controller('mainController', ['$scope', function ($scope) {
  	      $scope.greetMe = 'Hello world!';
  	}]);



