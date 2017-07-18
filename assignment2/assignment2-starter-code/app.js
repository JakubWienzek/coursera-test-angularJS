(function (){
    'use strict';

    angular.module('jwapp', [])
    .controller('ShoppingListCheckOffCTRL', ShoppingListCheckOffCTRL)
    .controller('AlreadyBoughtControllerCTRL', AlreadyBoughtControllerCTRL)
    .service('ListManagerSERV', ListManagerSERV);

    var initialList = [{name: 'apple(s)', quantity: 2}, 
                        {name: 'flour', quantity: "1 bag"},
                        {name: 'egg(s)',quantity: 4},
                        {name: 'milk', quantity: '1 bottle'}];

    function ListManagerSERV() {
        var service = this;

        var toBuyList = initialList;
        var alreadyBoughtList = [];
        
        service.getToBuyList = function() {
            return toBuyList;
        };

        service.getAlreadyBoughtList = function() {
            return alreadyBoughtList;
        };

        service.markItemAsBought = function(index) {
            addItemToBoughtList(toBuyList[index]);
            toBuyList.splice(index, 1);
        };

        var addItemToBoughtList = function(item) {
            alreadyBoughtList.push(item);
        };
    };

    ShoppingListCheckOffCTRL.$inject = ['ListManagerSERV'];
    function ShoppingListCheckOffCTRL(ListManagerSERV) {
        var toBuyList = this;
        var service = ListManagerSERV;

        toBuyList.list = service.getToBuyList();

        toBuyList.itemBought = function(index) {
            service.markItemAsBought(index);
        };
    };

    AlreadyBoughtControllerCTRL.$inject = ['ListManagerSERV'];
    function AlreadyBoughtControllerCTRL(ListManagerSERV) {
        var alreadyBoughtList = this;

        alreadyBoughtList.list = ListManagerSERV.getAlreadyBoughtList();
    };
})();