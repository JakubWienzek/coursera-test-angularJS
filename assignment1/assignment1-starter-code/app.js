(function () {
    'use strict';

    angular.module('lunchFood', [])

    .controller("notTooMuchCtrl", notTooMuch);

    notTooMuch.$inject = ['$scope'];
    function notTooMuch($scope) {
        $scope.isTooMuchMessage = "";
        $scope.isTooMuchInput = "";

        $scope.checkTooMuch = function() {
            var foodArray = $scope.isTooMuchInput.split(',');
            $scope.isTooMuchMessage = prepareMessage(countFood(foodArray));
        };

        function countFood(foodArray) {
            var realFoodArray = [];
            for(var i=0; i < foodArray.length; i++) {
                if(foodArray[i].trim() !== "") {
                    realFoodArray.push(foodArray[i]);
                }
            }
            return realFoodArray.length;
        }

        function prepareMessage(foodCount) {
            if(foodCount === 0) {
                return "Please enter data first";
            } else if(foodCount <=3) {
                return "Enjoy!";
            } else if(foodCount >= 4) {
                return "Too much!";
            }
        };
    }
})()