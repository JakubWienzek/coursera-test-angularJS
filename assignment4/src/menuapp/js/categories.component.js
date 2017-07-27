(function() {
    'use strict';

    angular.module('MenuApp')
        .component('categoriesList', {
            templateUrl: 'src/menuapp/templates/menuapp.categoriesList.template.html',
            bindings: {
                items: '<'
            }
        });

})();