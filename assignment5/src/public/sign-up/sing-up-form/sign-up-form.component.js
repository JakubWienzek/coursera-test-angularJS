(function () {
    'use strict';

angular.module('public')
    .component('signUpForm', {
        templateUrl: 'src/public/sign-up/sing-up-form/form.html',
        controller: 'FormController',
        controllerAs: 'formCtrl'
    });

angular.module('public')
    .controller('FormController', FormController);

    FormController.$inject = ['$scope', 'ApiPath', 'userInfoService'];
    function FormController($scope, ApiPath, UserInfoService) {
        var ctrl = this;

        ctrl.saved = false;
        ctrl.error = false;
        ctrl.user = {
            first_name : "",
            last_name : "",
            email : "",
            phoneNr : "",
            favourite : ""
        }

        ctrl.submit = function (){
            var promise = UserInfoService.getItemByShortName(ctrl.user.favourite);

            promise.then(function (response) {
                    ctrl.user.favourite = response.data;
                    UserInfoService.setUserInfo(ctrl.user);
                    ctrl.error = false;
                    ctrl.saved=true;
                    $scope.signUp.$setPristine();
                    $scope.signUp.$setUntouched();
                    resetUser();
                })
                .catch(function (error) {
                    console.log("Something went terribly wrong.");
                    ctrl.error = true;
                    ctrl.saved=false;
                });
        }

        function resetUser() {
            ctrl.user.first_name = "";
            ctrl.user.last_name = "";
            ctrl.user.email = "";
            ctrl.user.phoneNr = "";
            ctrl.user.favourite = "";
        }
    }
})();