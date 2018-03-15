
var app = angular.module('shopping_App')
 .controller("sportsController", function ($scope, $q, jsonService,$state) {

    $scope.gamefilter=[];
    var game=['tennis','football','cricket'];
    $scope.games=game;

    $scope.slider = {
  min: 0,
  max: 5000,
  options: {
    floor: 0,
    ceil: 5000,
  },
};

 $scope.minfilter = function (x) {
        return x.price>= $scope.slider.min;
        console.log("price",x.price);
    };

    $scope.maxfilter = function (x) {
        return x.price <= $scope.slider.max;
    };


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
                $state.go('product',{'id':productID});

               }                 
              // );    
        }
        )

 .filter('selectedTags', function() {
          
       return function(account3, game) {
        console.log(game);
          return account3.filter(function(account3) {
            if(game[0] ||  game[1] || game[2] ){
             for (var i in account3) {
                if (game.indexOf(account3.sport) != -1) {
                    console.log();
                    return true;
                    //console.log("brand");
                }

              }  
              return false;
            }
            else{ 
              
                return true;
            }

        });
    };
});




