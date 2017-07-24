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
        ctrl.items = [];

        ctrl.search = function() {
            service.resetFoundItems();
            service.getMatchedMenuItems(ctrl.narrowString);
            ctrl.items = service.getFoundItems();
        }

        ctrl.removeItem = function(itemIndex) {
            service.removeItem(itemIndex);
        };
    };

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var serv = this;
        var found = [];

        serv.getMatchedMenuItems = function(searchTerm) {
            var response = $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            })
            .then(function (response) {
                var menu = response.data.menu_items;
                setFiltederList(searchTerm, menu);
            })
            .catch(function (error) {
                console.log("Error while getting menu from server");
            });
        };

        function setFiltederList(searchTerm, menu) {
            for(var i=0;i<menu.length;i++) {
                if(menu[i].name.toLowerCase().indexOf(searchTerm) !== -1)
                    found.push(menu[i]);
            }
        }
        
        serv.resetFoundItems = function() {
            found = [];
        }

        serv.getFoundItems = function() {
            return found;
        }

        serv.removeItem = function(itemIndex) {
            found.splice(itemIndex, 1);
        }
    };

    function FoundItems() {
        var ddo = {
            scope: {
                onRemove: "&",
                items: "<"
            },
            templateUrl: "components/foundItems.html",
            controller: FoundItemsController,
            controllerAs: "FIctrl",
            bindToController: true
        };

        return ddo;
    };

    function FoundItemsController() {
        var FIctrl = this;

        FIctrl.emptyList = function() {
            if(FIctrl.items.length === 0) {
                return true;
            }
            return false;
        }
    };
})();