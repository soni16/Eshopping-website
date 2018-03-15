
angular.module('shopping_App').controller("cartController", function ($scope,$q, jsonService) {
        
        $scope.cart = [];

        $scope.fId = '';
        $scope.fName = '';
        $scope.fprice = '';

        //$scope.totalPrice = 0;


        //console.log("cartController");
       
       // $scope.getCartProduct= function(){
        var x= jsonService.getSelectedCart()
         //.then(function(obj)
         {
           // console.log("obj->",obj);
            $scope.resp = x;
            console.log("scope.resp",$scope.resp);

            //     var arr=JSON.parse(localStorage.getItem('id'));
            // console.log(arr);
            // if(arr==null)
            // {
            //     arr=[];
            // }
            // var i = 0;
            // for(i ; i < arr.length ; i++)
            // {    console.log("length",arr. length);
            //      console.log("count",x.count);
            //      console.log("id",arr[i].id);
            //      console.log("id",x[i].id);
            //      console.log("count",x.count);

            //     if(x[i].id == arr[i].id)
            //     {
            //       x[i].count = x[i].count + 1;
            //       console.log("count",x[i].count); 
            //       break; 
            //     }
            //     else
            //     {
            //         console.log("else");
            //         break;
            //     }
            // }
        

            var totalPrice = 0;
            $scope.quantity =1;
             for(var count=0;count<$scope.resp.length;count++){
              //console.log("quantity",$scope.resp[count].quantity);
             // console.log("price",$scope.resp[count].data.price);
              totalPrice += ($scope.resp[count].price * $scope.quantity);
               console.log( totalPrice);
            }
             console.log( totalPrice);
             $scope.totalPrice=totalPrice;          

       };

       // $scope.totalPrice = function(){
       
       // };

       $scope.clearSelectedProduct= function(obj) {
        console.log(obj);

        // jsonService.clearSelectedProduct(obj)
        // {
            $scope.resp=obj;
            var uid = $scope.resp;
            
            console.log("length",uid);
            var arr = localStorage.getItem('id');
            arr = JSON.parse(arr);
            console.log(arr);
            for(var i = 0; i < arr.length;i++){
              if(arr[i].id == uid){
                arr.splice(i,1);
                break;
              }
            }
            console.log(arr);
            localStorage.setItem('id',JSON.stringify(arr));
            $scope.resp = arr;

            console.log("on delete",$scope.resp);
           //    for (var i = 0; i < localStorage.length; i++) {
           //      var x=localStorage.getItem(localStorage.key(i));
           //        var y = JSON.parse(x);
           //        console.log(y);
           //        if(y[i].id==uid){
           //            localStorage.removeItem(y[i]);
           //        }
                
           // }
           // localStorage.setItem('id', )
             // console.log("y",y[0]);
             
      //}
    };

       
         console.log("at the end",$scope.cart);
       // console.log($scope.obj);

        

        
});





