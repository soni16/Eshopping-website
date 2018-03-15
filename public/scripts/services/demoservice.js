
angular.module('shopping_App').service("jsonService", function ($http, $q) {
 
    var self = this;
    var flag = true;
   
    var selectedProduct = {};
    var tempCart =[];
    self.getAccount = function () {
           var deferred = $q.defer();
 
           return $http.get('http://localhost:5000/mobiles')
            .then(function (response) {
                // promise is fulfilled
                deferred.resolve(response.data);
                // promise is returned
                return deferred.promise;
            }, function (response) {
                // the following line rejects the promise 
                deferred.reject(response);
                // promise is returned
                return deferred.promise;
            })
        ;
        
    };

    // self.getAccount = function(url) {
    //     var deferred = $q.defer();
    //     var req = {
    //         method: 'GET',
    //         url: url
    //     }
    //     $http(req).then(function(res) {
    //         deferred.resolve(res);
    //     });
    //     return deferred.promise;
    // }

    // self.setSelectedProduct = function(params){
    

    //     self.selectedProduct=params 
    //    // 

    //    //console.log(self.selectedProduct);
    //     // var deferred = $q.defer();

    //     // selectedProduct = params;
        
    //      localStorage.setItem('id', this.selectedProduct);
         
    //     // deferred.resolve('success');
    //     // return deferred.promise;
    //     // return 'success';
    // }



    // self.getSelectedProduct = function(){
    //     var deferred = $q.defer();
    //     var Fid = localStorage.getItem('id');
       
    //     //console.log("FID",Fid[0].id);
    //     deferred.resolve(Fid);
        

    //     return deferred.promise;
    // }



    self.setSelectedProduct = function (params) {
           var deferred = $q.defer();
           var id = params;
           console.log("id",params);
            var i = ('http://localhost:5000/mobiles/' + id);
            console.log("path",i);
            return $http.get('http://localhost:5000/mobiles/?id=' + id)
            .then(function (response) {
                deferred.resolve(response.data);
                return deferred.promise;
            }, function (response) { 
                deferred.reject(response);
                return deferred.promise;
            })
        ;
        
        
    };
    // self.getSelectedProduct = function (params) {
    //        var deferred = $q.defer();
    //        var id = params;
    //        console.log("id",params);
    //         var i = ('http://localhost:5000/mobiles/' + id);
    //         console.log("path",i);
            
        
    // };


    self.setSelectedCart = function(params){
         console.log('param',params);
          
        self.selectedProduct=params ;
        console.log("selectedProduct",self.selectedProduct);
        //selectedProduct.count= 1;
        
        

           
           
        var arr=JSON.parse(localStorage.getItem('id'));
        console.log("array",arr);
        if(arr==null)
        {
            arr=[];
        }

        var i = 0;
         for(i=0;i < arr.length;i++)
         {
             console.log("id",self.selectedProduct.id);
             console.log("arr id",arr[i].data.id);
           if(arr[i].data.id == self.selectedProduct.id)
           {
               flag=false;
               console.log("ifFlag",flag);
               break;
           }
           else
            {
              flag=true;
              console.log("elseFlag",flag);

            }
         }
         //console.log(arr[i].quantity);
         if(flag==true)
         {
            arr.push({data : self.selectedProduct, quantity: 1});

            
         }
         else 
         {
            arr[i].quantity = arr[i].quantity + 1;
            console.log(arr[i].quantity);
           // localStorage.setItem('id', JSON.stringify(arr),'quantity':quantity+1); 
         }
        localStorage.setItem('id', JSON.stringify(arr)); 
             // tempCart.push(this.selectedProduct);
             // localStorage.setItem('id', JSON.stringify(tempCart));
     
        //console.log("local storage",tempCart);
       

       //console.log(self.selectedProduct);
        // var deferred = $q.defer();

        // selectedProduct = params;
        
         
        // deferred.resolve('success');
        // return deferred.promise;
        // return 'success';
    }


    self.getSelectedCart = function(){
        // var deferred = $q.defer();
         
        // var Fid = localStorage.getItem('id');
        // //console.log("Hii");
        // //console.log("FID",Fid);
        
        

        // return deferred.promise;

        var x = localStorage.getItem('id');
        var y = JSON.parse(x);
        return y;

         //deferred.resolve(y);
    }

    // self.clearSelectedProduct = function(params){
    //      self.selectedProduct=params;
    //      console.log("key",selectedProduct);

       
        
    // }

    // self.clearSelectedProduct = function(params){
    //     //var deferred = $q.defer();
    //     self.selectedProduct=params;

           
    //     //selectedProduct = {};
    //     //deferred.resolve('done');
    //     //return deferred.promise;
    // }
});