
angular.module('shopping_App').controller("fashion_descController", function ($scope,$q, jsonService,$state,$stateParams) {
    $scope.getSelectedProduct= function(){
        //console.log("hello");

        new Drift(document.querySelector('.drift-demo-trigger'), {
        paneContainer: document.querySelector('.detail'),
        inlinePane: 900,
        inlineOffsetY: -85,
        containInline: true,
        hoverBoundingBox: false
      });
        
    jsonService.getUniqueFashion()
        .then(
            function (result) {
           // console.log("result",result);          
                 $scope.data = result.result; 
                 //console.log($scope.data);        
             },
            function (error) {
                // handle errors here
                //console.log(error.statusText);
            }
        )};

         $scope.setCartProduct = function(productID, types) {
            jsonService.addCart(productID,types);
              // console.log("Params->",productID);
               //console.log("types",types);
                  $state.go('cart',{'id':productID});
   
        };

        $scope.changeImage = function (src) {
            //console.log("src" ,src);
            $scope.viewpic = src;
            //console.log("view",$scope.viewpic);
            };
        

});





