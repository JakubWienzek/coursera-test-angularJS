(function() {
    'use strict'

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems);

    NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
    function NarrowItDownController($scope, MenuSearchService) {
        var ctrl = this;
        var service = MenuSearchService;

        ctrl.foodList = service.getMatchedMenuItems(ctrl.narrowString);  

    };

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var serv = this;

        var found = [];
        //list excluded
        //zachowanie asynchronizne $html

        serv.getMatchedMenuItems = function(searchTerm) {
            console.log("term: " +searchTerm);
          //That method will be responsible for reaching out to the server (using the $http service)  
          //https://davids-restaurant.herokuapp.com/menu_items.json
        };

        serv.removeUnwanted = function(index) {
            //this will remove unwanted element from list
        };
    };

    function FoundItems() {
        var ddo = {
            scope: {
                //TODO
                onRemove: "=?",
                foundItem: "=?",
                found: "<"
            },
            templateUrl: "components/foundItems.html"
        };

        return ddo;
    };
})();