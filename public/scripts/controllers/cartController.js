
angular.module('shopping_App').controller("cartController", function ($location,$scope,$q,$http, jsonService,$state,$stateParams) {
    
    console.log("cart");

    var arr=[];
    var values =[];
    var pricearr =[];
    var totalPrice = 0; 
    var totalCount =0 ;
    var cartData ;
    var count ;
    var keys ;

      jsonService.getCart()
        .then(
            function (result) {          
                 $scope.cart = result.result;               
                 for(var i=0; i< $scope.cart.length ; i++)
                 {
                  var cart_id = $scope.cart[i].id;
                  var cart_types = $scope.cart[i].types;
                  var quantity = $scope.cart[i].quantity;
                   //console.log(cart_id,cart_types,quantity);
                    jsonService.getIndividualItem(cart_types,cart_id,quantity )
                    .then(function(item){
                      //console.log("item",item.count);
                      //console.log("item",item.result[0].name);
                      
                       arr.push(item);
                       $scope.cartData = arr;
                       //console.log("cartData",$scope.cartData);
                      // console.log(arr);
                         totalCount = totalCount + item.count; 
                        //console.log("total item",totalCount);
                        $scope.totalCount =totalCount ;
                        totalPrice = (totalPrice +item.result[0].price*(item.count)) ;
                       $scope.total_price = totalPrice;
                    });       
                 } 
              },
            function (error) {
                // handle errors here
                //console.log(error.statusText);
            });


        $scope.deleteCart = function(ID,index) {
            jsonService.clearCart(ID).then (function(result){
              //console.log("delete",$scope.cartData);

             $scope.cartData.splice(ID,1);    
    // setTimeout(function () {
    //     $scope.$apply(function () {
    //         $scope.cartData ;
    //     });
    // }, 2000);

            });

               console.log("Params->",ID);    
        };
        
    $scope.increaseCount = function(ID) {
            jsonService.increaseCartCount(ID);
             // console.log("increaseCount",result);
             location.reload();
          };

             $scope.decreaseCount = function(ID) {
            jsonService.decreaseCartCount(ID);
            location.reload();
          };
    

});










