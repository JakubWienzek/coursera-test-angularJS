(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesCTRL', CategoriesCTRL);

    CategoriesCTRL.$inject = ['MenuDataService', 'items'];
    function CategoriesCTRL(MenuDataService, items) {
        var ctrl = this;
        ctrl.items = items;
        console.log("cat: ", items);
    }

})();