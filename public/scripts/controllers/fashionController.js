
angular.module('shopping_App').controller("fashionController",function ($scope, $q, jsonService,$state) {
  
 
$scope.brand= [];
  $scope.brands = ['Vero Moda','Biba','Tommy Hilfiger','Louis Philippe','Peter England']
    $scope.slider = {
  min: 0,
  max: 3000,
  options: {
    floor: 0,
    ceil: 3000,
  },
};

 $scope.minFilter = function (x) {
        return x.price>= $scope.slider.min;
        console.log("price",x.price);
    };

    $scope.maxFilter = function (x) {
        return x.price <= $scope.slider.max;
    };
// $scope.change = function(list, active){

  
//         if (active)
//             $scope.brand.push(list.vl);
//         else
//             $scope.brand.splice($scope.brand.indexOf(list.vl), 1);
//   };


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

        


        $scope.setCartProduct = function(productID, types) {
            jsonService.addCart(productID,types);
               console.log("Params->",productID);
               console.log("types",types);
                  $state.go('cart',{'id':productID});
   
        };


        //console.log("Acount",$scope.account2);
                $scope.setSelectedProduct = function(productID) {
            // .then(
            //   function(params){
               console.log("Params->",productID);
                $scope.id= productID;
                console.log("name",$scope.id);                
                $state.go('fashion_desc',{'id':productID});

               }           
              // );    
        })


.filter('selected', function() {
          //console.log("selected tags");
       return function(account2, brands) {
        //console.log("item",item);
          return account2.filter(function(account2) {
            if(brands[0]||brands[1]||brands[2]||brands[3]||brands[4] ){
             for (var i in account2) {
                if (brands.indexOf(account2.brand) != -1) {
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





