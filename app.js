(function (){
    'use strict';

    angular.module('myFirstApp', [])

    .controller('myFirstController', function($scope) {
        $scope.name = "Jakub";
        $scope.sayHello = function() {
            return "Hi lad";
        };
    });

})();