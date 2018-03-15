
angular.module('shopping_App').controller("cartController", function ($scope,$q,$http, jsonService,$state,$stateParams) {
    
    console.log("cart");

    var arr=[];
    var pricearr =[];
    var totalPrice = 0; 
    var totalCount =0 ;
    var count ;
    var keys ;
   // $scope.total_price = 0;
      jsonService.getCart()
        .then(
            function (result) {
            //console.log("result",result);          
                 $scope.cart = result.result; 
                 //console.log($scope.cart);
                 //console.log($scope.cart.length);

                 for(var i=0; i< $scope.cart.length ; i++)
                 {
                  var cart_id = $scope.cart[i].id;
                  var cart_types = $scope.cart[i].types;
                   $scope.quantity = $scope.cart[i].quantity;

                  $http.get('http://localhost:5000/'+cart_types  +'/'+ cart_id)
                       .then(function (response) {
                         $scope.allData = response; 
                         //console.log($scope.allData);        
                          arr.push($scope.allData.data.result[0]);
                           pricearr.push($scope.allData.data.result[0].price);
                           console.log("length",pricearr.length);
                           $scope.totalCount = pricearr.length ;
                           for(var i=0 ;i< pricearr.length; i++)
                           {
                            i =pricearr.length-1;
                           totalPrice = (totalPrice +(pricearr[i]*($scope.quantity))) ;
                           }
                           $scope.total_price = totalPrice;
                        });                   
                 $scope.quantity = $scope.cart[i].quantity;
                 $scope.cartData=arr;               
                 
                 } 
                

                   

              },
            function (error) {
                // handle errors here
                console.log(error.statusText);
            }
        );


        $scope.deleteCart = function(ID) {
            jsonService.clearCart(ID);

               console.log("Params->",ID);    
        };
        
   
    

});










