(function() {
    'use strict';


    angular.module('data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$q']
    function MenuDataService($q) {
        var serv = this;

        //this method should return a promise which is a result of using the $http service,
        // using the following REST API endpoint:
        // https://davids-restaurant.herokuapp.com/categories.json
        serv.getAllCategories = function() {
            var deferred = $q.defer();
            deferred.resolve();
            return deferred.promise;
        }

        // this method should return a promise which is a result of using the $http service,
        // using the following REST API endpoint:
        //https://davids-restaurant.herokuapp.com/menu_items.json?category=,
        // where, before the call to the server, your code should append whatever
        // categoryShortName value was passed in as an argument into the getItemsForCategory method.
        serv.getItemsForCategory = function(categoryShortName) {

        }
    }
})();