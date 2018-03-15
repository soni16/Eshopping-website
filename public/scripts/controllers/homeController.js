
 var app = angular.module('shopping_App')
 .controller("homeController", function ($scope, $q, jsonService,$state) {
 
    jsonService.getClothes()
        .then(
            function (result) {
            console.log("result",result);          
                 $scope.clothes = result.result; 
                 console.log($scope.clothes);        
             },
            function (error) {
                // handle errors here
                console.log(error.statusText);
            }
        );

        jsonService.getMobiles()
        .then(
            function (result) {
            console.log("result",result);          
                 $scope.mobiles = result.result; 
                 console.log("mobiles",$scope.mobiles);        
             },
            function (error) {
                // handle errors here
                console.log(error.statusText);
            }
        );

        jsonService.getSports()
        .then(
            function (result) {
            console.log("result",result);          
                 $scope.sports = result.result; 
                 console.log("SPORTS",$scope.sports);        
             },
            function (error) {
                // handle errors here
                console.log(error.statusText);
            }
        );

        $scope.setSelectedProduct = function(productID) {
            // .then(
            //   function(params){
               console.log("Params->",productID);                
                $state.go('electronics_desc',{'id':productID});

               } ; 


                $scope.setSelectedClothes = function(productID) {
            // .then(
            //   function(params){
               console.log("Params->",productID);                
                 $state.go('fashion_desc',{'id':productID});

               } ;                 
                 

        
});




