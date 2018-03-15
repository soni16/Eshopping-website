    // create the module and name it scotchApp

    var app = angular.module('shopping_App', ['ui.router','rzModule']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl : '../views/home.html',
            controller  : 'homeController'
        })
        .state('sports', {
        url: '/sports',
        templateUrl : 'views/sports.html',
        controller  : 'sportsController'
        })

        .state('fashion', {
        url: '/fashion',
        templateUrl : 'views/fashion.html',
         controller  : 'fashionController'
        })

        .state('electronics', {
            url: '/electronics',
             templateUrl : 'views/electronics.html',       
             controller  : 'electronicsController'
            
            
        })

        .state('product', {
            url: '/product/:id',
             templateUrl : 'views/product.html',       
             controller  : 'productController'
            
            
        })

            .state('electronics_desc', {
            url: '/electronics-desc/:id',
             templateUrl : 'views/electronics_desc.html',       
             controller  : 'electronics_descController'
            
            
        })
             .state('fashion_desc', {
            url: '/fashion_desc/:id',
             templateUrl : 'views/fashion_desc.html',       
             controller  : 'fashion_descController'
            
            
        })


        .state('cart', {
            url: '/cart/:id',
             templateUrl : 'views/cart.html',       
             controller  : 'cartController'
            
            
        })
        
    });
        app.controller('mainctrl',function($scope,$state){
            $scope.initFunction=function(){
                $state.go('home')
            }
        });

            
        



    