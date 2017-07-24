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
        
        ctrl.items = service.getFoundItems();

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

        serv.resetFoundItems = function() {
            found = [];
        }

        serv.getFoundItems = function() {
            return found;
        }

        serv.removeItem = function(itemIndex) {
            found.splice(itemIndex, 1);
        }

        serv.getMatchedMenuItems = function(searchTerm) {
            
            var response = $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            })
            .then(function (response) {
                console.log(found);
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
            console.log("searchTerm: " + searchTerm);
            console.log(menu);
            console.log(found);
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
            bindToController: true,
            link: FoundItemsLink
        };

        return ddo;
    };

    function FoundItemsController() {
        var FIctrl = this;
        FIctrl.isEmpty = false;

        FIctrl.emptyList = function() {
            if(FIctrl.items.length === 0) {
                FIctrl.isEmpty= true;
            }
            FIctrl.isEmpty = false;
        }
    };

    function FoundItemsLink(scope, element, attrs, controller) {
        console.log(scope);
        console.log(controller);
        console.log(element);

        scope.$watch('FIctrl.emptyList()', function (newValue, oldValue) {
            console.log(newValue);
            console.log(oldValue);

            if(newValue) {
                display();
            }
        });

        function display() {
            var warningElement = element.find("div");
            warningElement.css('display', 'block');
        };
    }
})();