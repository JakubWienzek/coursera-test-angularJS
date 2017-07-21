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
        ctrl.menu = service.getMatchedMenuItems();

        ctrl.removeItem = function(itemIndex) {
            console.log(itemIndex);
            ctrl.menu.splice(itemIndex, 1);
            console.log(ctrl.menu.length);

        };
    };

    function FoundItems() {
        var ddo = {
            scope: {
                onRemove: "&",
                found: "<"
            },
            templateUrl: "components/foundItems.html",
            controller: NarrowItDownController,
            controllerAs: 'narrowCtrl',
            bindToController: true
        };

        return ddo;
    };

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var serv = this;
        serv.found = [];
        serv.menu = [];

        serv.getMatchedMenuItems = function(searchTerm) {
            var response = $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            })
                .then(function (response) {
                serv.menu = response.data.menu_items;
                console.log(serv.menu);
                getFiltederList(searchTerm, serv.menu);
            })
                .catch(function (error) {
                    console.log("Error while getting menu from server");
                });

            return serv.found;
        };

        function getFiltederList(searchTerm, menu) {
            searchTerm = 'p';
            for(var i=0;i<menu.length;i++) {
                if(menu[i].name.toLowerCase().indexOf('') !== -1)
                    serv.found.push(menu[i]);
            }
        }

        serv.removeUnwanted = function(index) {
            //this will remove unwanted element from list
        };
    };
})();