(function() {
    'use strict';

    angular.module('MenuApp').
        component('itemsList', {
            templateUrl: 'src/menuapp/templates/menuapp.itemsList.template.html',
            bindings: {
                items: '<'
            }

    });
})();