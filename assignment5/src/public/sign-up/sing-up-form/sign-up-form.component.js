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

    FormController.$inject = ['ApiPath', 'userInfoService'];
    function FormController(ApiPath, UserInfoService) {
        var ctrl = this;

        ctrl.itemFound;
        ctrl.saved = false;
        ctrl.user = {
            first_name : "",
            last_name : "",
            email : "",
            phoneNr : "",
            favourite : ""
        }

        ctrl.submit = function (){
            UserInfoService.setUserInfo(ctrl.user);
            ctrl.saved = true;
            /*ctrl.user.first_name = "";
                ctrl.user.last_name = "";
                ctrl.user.email = "";
                ctrl.user.phoneNr = "";
                ctrl.user.favourite = "";*/
        }

    }
})();