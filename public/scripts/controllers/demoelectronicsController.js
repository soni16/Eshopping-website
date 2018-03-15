
angular.module('shopping_App').controller("electronicsController",function ($scope, $q, jsonService,$state) {
  
 
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


    jsonService.getAccount()
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


        $scope.setCartProduct = function(productName) {
            jsonService.setSelectedCart(productName);
            // .then(
            //   function(params){
               console.log("Params->",productName);
               $scope.item= productName;
                console.log("product name ",$scope.item);


                  $state.go('cart');

               //}                 
              // );    
        };


        $scope.setSelectedProduct = function(productID) {
            jsonService.setSelectedProduct(productID);
            // .then(
            //   function(params){
               console.log("Params->",productID);
                $scope.id= productID;
                console.log("name",$scope.id);                
                $state.go('electronics_desc');

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





