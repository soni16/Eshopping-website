
angular.module('shopping_App').controller("productController", function ($scope,$q, jsonService) {
        
        $scope.account2 = [];

        $scope.fId = '';
        $scope.fName = '';
        $scope.fImage = '';
        $scope.fprice = '';
       
       $scope.getSelectedProduct= function(){
         jsonService.getSelectedProduct().then(function(obj){
            console.log("obj->",obj);
            $scope.resp = obj;
            console.log("4scope.resp",$scope.resp);
            jsonService.getAccount().then(function (result) {             
        
                 $scope.account2 = result.clothings;
                 var product = $scope.account2 ;
                 console.log("bb",product);

                 for(var i=0;i< product.length;i++)
                 {
                    if($scope.resp == product[i].id)
                    {
                        console.log("Product->",product[i]);
                        $scope.fId = product[i].id;
                        $scope.fName = product[i].name;
                        $scope.fImage = product[i].image[0];
                        $scope.fprice = product[i].price;

                    }
                 }

                 console.log("Fname->",$scope.fName);

          }}

                
            },
            function (error) {
                // handle errors here
                console.log(error.statusText);
            }
          );

            //console.log("BB->",$scope.account2);

            // for(var i=0;i<account2.length();i++){
            //     if(resp=account2[i])
            //     {
            //         $scope
            //     }
            // }


         });
       

       

       // console.log($scope.obj);

        

        
});
}





