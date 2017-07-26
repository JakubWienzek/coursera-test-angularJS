(function() {
    'use strict';


    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$q', '$http', 'ApiBasePath']
    function MenuDataService($q, $http, ApiBasePath) {
        var serv = this;

        //this method should return a promise which is a result of using the $http service,
        // using the following REST API endpoint:
        // https://davids-restaurant.herokuapp.com/categories.json
        serv.getAllCategories = function() {
            var responce = $http({
                method: 'GET',
                url: (ApiBasePath + "/categories.json")
            })

            return responce;
        }

        // this method should return a promise which is a result of using the $http service,
        // using the following REST API endpoint:
        //https://davids-restaurant.herokuapp.com/menu_items.json?category=,
        // where, before the call to the server, your code should append whatever
        // categoryShortName value was passed in as an argument into the getItemsForCategory method.
        serv.getItemsForCategory = function(categoryShortName) {
            var responce = $http({
                method: 'GET',
                url: (ApiBasePath + "/menu_items.json"),
                params: {
                    category: categoryShortName
                }
            })
            console.log(categoryShortName);
            return responce;
        }
    }
})();