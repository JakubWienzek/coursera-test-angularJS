(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesCTRL', CategoriesCTRL);

    CategoriesCTRL.$inject = ['categories', 'MenuDataService'];
    function CategoriesCTRL(categories, MenuDataService) {
        var ctrl = this;
        ctrl.categories = categories;
    }

})();