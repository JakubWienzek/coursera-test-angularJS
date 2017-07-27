(function() {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http', 'ApiBasePath']
    function MenuDataService($http, ApiBasePath) {
        var serv = this;

        serv.getAllCategories = function() {
            var responce = $http({
                method: 'GET',
                url: (ApiBasePath + "/categories.json")
            }).then(function (responce) {
                return responce.data;
            }).catch(function (error) {
                console.log(error);
            })

            return responce;
        }

        serv.getItemsForCategory = function(categoryShortName) {
            var responce = $http({
                method: 'GET',
                url: (ApiBasePath + "/menu_items.json"),
                params: {
                    category: categoryShortName
                }
            }).then(function (responce) {
                return responce.data;
            }).catch(function (error) {
                console.log(error);
            })

            return responce;
        }
    }
})();