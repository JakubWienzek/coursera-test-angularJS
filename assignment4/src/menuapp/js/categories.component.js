(function() {
    'use strict';

    //shows all available categories in the menu to the user
    angular.module('MenuApp')
        .component('categoriesList', {
            templateUrl: 'src/menuapp/templates/menuapp.categoriesList.template.html',
            bindings: {
                items: '<'
            }
        });

})();