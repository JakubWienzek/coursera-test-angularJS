(function () {
    'use strict';

    angular.module('public')
        .controller('UserInfoController', UserInfoController);

    UserInfoController.$inject= ['user'];
    function UserInfoController(user) {
        var ctrl = this;
        ctrl.user = user;
    }
})();