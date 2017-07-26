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
                        var promise = MenuDataService.getAllCategories();

                       return promise.then( function (responce) {
                           console.log(responce.data)
                           return responce.data;
                        });
                    }]
                }
            })

            .state('items', {
                url: '/items/{categoryId}',
                templateUrl: 'src/menuapp/templates/menuapp.items.template.html',
                controller: 'ItemsInCategoriesCTRL as ctrl',
                resolve: {
                    items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                        var promise = MenuDataService.getItemsForCategory($stateParams.categoryId);

                        return promise.then( function (responce) {
                            console.log(responce.data)
                            return responce.data;
                        });
                    }]
                }
            })
    }
})();