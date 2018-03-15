
angular.module('shopping_App').controller("electronics_descController", function ($scope,$q, jsonService,$state) {
        
        $scope.account3 = [];
        $scope.fId = '';
        $scope.fName = '';
        $scope.fImage = '';
        $scope.fprice = '';
        $scope.feature1 = '';
        $scope.feature2 = '';
        $scope.feature3 = '';
        $scope.title = '';
        $scope.desc = '' ;
        $scope.data = '';

       
       $scope.getSelectedProduct= function(){
         jsonService.setSelectedProduct().then(function(obj){
            console.log("obj->",obj);
            $scope.resp = obj;
            console.log("4scope.resp",$scope.resp)
            // jsonService.getAccount().then(function (result) {             
        
            //      $scope.account3 = result.mobiles;
            //      var product = $scope.account3 ;
            //      //console.log("bb",product);

            //      for(var i=0;i< product.length;i++)
            //      {
            //         //console.log("scpe",product[i]);
            //         if($scope.resp == product[i].name)
            //         {
            //             console.log("Product->",product[i]);
            //             $scope.data =product[i]; 
            //             $scope.fId = product[i].id;
            //             $scope.fName = product[i].name;
            //             $scope.fImage1 = product[i].image[0];
            //             $scope.fImage2 = product[i].image[1];
            //             $scope.fImage3 = product[i].image[2];
            //             $scope.fPrice = product[i].price;
            //              console.log("features",product[i].features);
            //             //$scope.feature1=product[i].features[0].screen;

            //            // $scope.feature2=product[i].features[1].processor;
            //             //$scope.feature3=product[i].features[2].os;
            //             //$scope.f

                   })
                 }

                


                 

//                  console.log("Fname->",$scope.fImage);

                 $scope.setCartProduct = function(productName) {
                     jsonService.setSelectedCart(productName);
            // .then(
            //   function(params){
            //     console.log("Params->",params);
                    $scope.item= productName;
                   console.log("product name ",$scope.item);


                   $state.go('cart');

               //}                 
              // );    
//         };



                
//             },
//             function (error) {
//                 // handle errors here
//                 console.log(error.statusText);
//             }
//           );

//             //console.log("BB->",$scope.account2);

//             // for(var i=0;i<account2.length();i++){
//             //     if(resp=account2[i])
//             //     {
//             //         $scope
//             //     }
//             // }


//          });
//        }

       

//        // console.log($scope.obj);

        

        
 });





