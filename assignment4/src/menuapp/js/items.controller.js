(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsInCategoriesCTRL', ItemsInCategoriesCTRL);

    ItemsInCategoriesCTRL.$inject = ['MenuDataService', 'items'];
    function ItemsInCategoriesCTRL(MenuDataService, items) {
        var ctrl = this;
        ctrl.items = items;
    }

})();