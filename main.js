   angular.module('myPage', [])
      .controller('MyController', ['$scope', function ($scope) {
        $scope.greetMe = 'World';
      }]);

    angular.element(document).ready(function() {
      angular.bootstrap(document, ['myApp']);
    });

    var logMe = function() {
    	console.log("Connected!");
    }();
