(function(){
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/menuapp/templates/menuapp.home.template.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/menuapp/templates/menuapp.categories.template.html',
                controller: 'CategoriesCTRL as ctrl',
                resolve: {
                    items: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('items', {
                url: '/items/{categoryId}',
                templateUrl: 'src/menuapp/templates/menuapp.items.template.html',
                controller: 'ItemsInCategoriesCTRL as ctrl',
                resolve: {
                    items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryId);
                    }]
                }
            })
    }
})();