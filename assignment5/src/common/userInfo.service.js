(function() {
'use strict';

    angular.module('common')
        .service('userInfoService', UserInfoService);
    
    UserInfoService.$inject = ['$http', 'ApiPath'];
    function UserInfoService($http, ApiPath) {
        var service = this;
        var userInfo = {
            first_name: null,
            last_name: null,
            email: null,
            phoneNr: null,
            favourite: null
        }

        var favouriteValid;

        service.getFavouriteValid = function () {
            return favouriteValid;
        }

        service.getUserInfo = function () {
            return userInfo;
        }

        service.setUserInfo = function (user) {
            getItemByShortName(user.favourite);

            userInfo.first_name = user.first_name;
            userInfo.last_name = user.last_name;
            userInfo.email = user.email;
            userInfo.phoneNr = user.phoneNr;
            userInfo.favourite = user.favourite;
        }

        function getItemByShortName(name) {
            var config = {};
            if (name) {
                config.params = {'short_name': name};
            }

            return $http.get(ApiPath + '/menu_items/'+ name+'.json')
                .then(function (response) {
                    console.log(response.data)
                    favouriteValid = true;
                    return response.data;
                })
                .catch(function (error) {
                    console.log(error);
                    favouriteValid = false;
                });
        };
    }
})();