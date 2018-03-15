
angular.module('shopping_App').controller("electronicsController",function ($scope, $q, jsonService,$state,$stateParams) {
  
 
$scope.brand= [];
  $scope.brands = ['htc','samsung','apple']
    $scope.slider = {
  min: 0,
  max: 50000,
  options: {
    floor: 0,
    ceil: 50000,
  },
};

 $scope.minfilter = function (x) {
        return x.price>= $scope.slider.min;
        console.log("price",x.price);
    };

    $scope.maxfilter = function (x) {
        return x.price <= $scope.slider.max;
    };


    jsonService.getMobiles()
        .then(
            function (result) {
            console.log("result",result);          
                 $scope.account3 = result.result; 
                 console.log($scope.account3);        
             },
            function (error) {
                // handle errors here
                console.log(error.statusText);
            }
        );

        // jsonService.getAccount('http://localhost:5000/mobiles')
        // .then(
        //     function (result) {
        //     console.log("result",result);          
        //     $scope.account3 = result.data.result; 
        //     console.log($scope.account3);        
        //      },
        //     function (error) {
        //      // handle errors here
        //      console.log(error.statusText);
        //     }
        // );


        // $scope.setCartProduct = function(productID) {
        //   jsonService.addCart(productID){

        //        console.log("Params->",productID);                
        //         $state.go('cart',{'id':productID}) 
        //     }   
                               
                   
        // };

         $scope.setCartProduct = function(productID, types) {
            jsonService.addCart(productID,types);
               console.log("Params->",productID);
               console.log("types",types);
                  $state.go('cart',{'id':productID});
   
        };


        $scope.setSelectedProduct = function(productID) {
            // .then(
            //   function(params){
               console.log("Params->",productID);                
                $state.go('electronics_desc',{'id':productID});

               }                 
              // );    
        }
        )


.filter('selectedMobiles', function() {
          //console.log("selectedMobiles");
       return function(account3, brands) {
        //console.log("brands",brands);
          return account3.filter(function(account3) {
            if(brands[0]||brands[1]||brands[2]){
             for (var i in account3) {
                if (brands.indexOf(account3.brand) != -1) {
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





