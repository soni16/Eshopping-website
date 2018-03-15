
angular.module('shopping_App').service("jsonService", function ($http, $q,$stateParams) {
 
    var self = this;
    var flag = true;
    
    
    var selectedProduct = {};
    var tempCart =[];
    self.getMobiles = function () {
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



    self.getUniqueAccount = function () {
           var deferred = $q.defer();
            var id = $stateParams.id ;
           console.log( id);
          
           return $http.get('http://localhost:5000/mobiles/'+ id)
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
            });
        
    };

    self.getClothes = function () {
           var deferred = $q.defer();
 
           return $http.get('http://localhost:5000/fashion')
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
    self.getUniqueFashion = function () {
        console.log("getUniqueFashion");
           var deferred = $q.defer();
           var id = $stateParams.id ;
           console.log( id);
            return $http.get('http://localhost:5000/fashion/'+ id)
            .then(function (response) {
                // promise is fulfilled
                deferred.resolve(response.data);
                // promise i s returned
                return deferred.promise;
            }, function (response) {
                // the following line rejects the promise 
                deferred.reject(response);
                // promise is returned
                return deferred.promise;
            });
        
    };
    self.getUniqueSports = function () {
        console.log("getUniqueFashion");
           var deferred = $q.defer();
           var id = $stateParams.id ;
           console.log( id);
            return $http.get('http://localhost:5000/Sports/'+ id)
            .then(function (response) {
                // promise is fulfilled
                deferred.resolve(response.data);
                // promise i s returned
                return deferred.promise;
            }, function (response) {
                // the following line rejects the promise 
                deferred.reject(response);
                // promise is returned
                return deferred.promise;
            });
        
    };

    self.getSports = function () {
           var deferred = $q.defer();
 
           return $http.get('http://localhost:5000/sports')
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


    // self.addCart = function(productID,types)
    // { 
    //      return ($http.post('/addCarts', { 'id': productID , 'quantity':1 ,'types':types }))
    //                   .then(function (response) {
    //                   // promise is fulfilled
    //                    deferred.resolve(response.data);
    //                    // promise is returned
    //                    return deferred.promise;
    //                    }, function (response) {
    //                    // the following line rejects the promise 
    //                    deferred.reject(response);
    //                    // promise is returned
    //                     return deferred.promise;
    //                    });

    // }
      var quantity = 1 ;
    self.addCart = function(productID,types){
          var deferred = $q.defer();
           console.log(quantity);
         return ($http.put('http://localhost:5000/carts/'+ productID +'/'+ quantity +'/' + types))

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
                       });

    }
    // self.addCart = function (productID,types) {

    //        var deferred = $q.defer();
    //        console.log("id",productID);
    //        console.log("types",types);
    //         $http.get('http://localhost:5000/carts/' + productID)
    //         .then (function(response){
    //             var allData = response.data.result ;
    //             console.log(response.data.result[0].quantity);
    //             var count = response.data.result[0].quantity;
    //             console.log("allData",allData.length);
                

    //         if(allData.length === 0)
    //             {
    //                 console.log("hello");
    //                return ($http.post('/addCarts', { 'id': productID , 'quantity':1 ,'types':types }))
    //                   .then(function (response) {
    //                   // promise is fulfilled
    //                    deferred.resolve(response.data);
    //                    // promise is returned
    //                    return deferred.promise;
    //                    }, function (response) {
    //                    // the following line rejects the promise 
    //                    deferred.reject(response);
    //                    // promise is returned
    //                     return deferred.promise;
    //                    });
    //             }
    //             else{
    //                 console.log("quantity is already is in cart");
    //                 count = count + 1 ;
    //                 var abc = ('localhost:5000/carts/' + productID + '/' + count );
    //                 console.log("path",abc);
    //                 return ($http.put('http://localhost:5000/carts/' + productID + '/' + count))
    //                   .then(function (response) {
    //                   // promise is fulfilled
    //                    deferred.resolve(response.data);
    //                    // promise is returned
    //                    return deferred.promise;
    //                    }, function (response) {
    //                    // the following line rejects the promise 
    //                    deferred.reject(response);
    //                    // promise is returned
    //                     return deferred.promise;
    //                    });
    //            }
    //         });             
           
        
    // };

    self.getCart = function () {
           var deferred = $q.defer(); 
           return $http.get('http://localhost:5000/allCarts')
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
            });
        
    };

    self.clearCart = function (productID) {
           var deferred = $q.defer();
           //console.log("id",productID);
           var id = productID;
           return $http.delete('http://localhost:5000/carts/'+ id)
            .then(function (response) {
                // promise is fulfilled
                console.log(response);
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

    
     var arr = [];
     self.getIndividualItem = function (cart_type, cart_id,quant ) {
           var deferred = $q.defer( ); 
             $http.get('http://localhost:5000/'+cart_type  +'/'+ cart_id)
                       .then(function (response) {
                      
                       ob = { result : response.data.result , count: quant  } ;
                       //arr.push({'value':response.data.result ,'count':quant} );
                       //var value =response.data.result;
                       console.log("value",ob);
                       //console.log("response",arr);
                        deferred.resolve(ob);
                        // console.log($scope.cart[i].quantity);
                        //  $scope.allData = response; 
                        //  var keys = $scope.allData.data.result[0];
                        //     console.log(this.quantity);
                        //   arr.push({'value':keys ,'count':quantity} );
                        //    var values = arr.push(keys);
                        //  // console.log("arr",arr);
                        //    pricearr.push($scope.allData.data.result[0].price);
                        //    //console.log("length",pricearr.length);
                        //    $scope.totalCount = pricearr.length ;
                        //    for(var i=0 ;i< pricearr.length; i++)
                        //    {
                        //     i =pricearr.length-1;
                        //    totalPrice = (totalPrice +(pricearr[i]*($scope.quantity))) ;
                        //    }
                        //    $scope.total_price = totalPrice;
                        });   
                        return deferred.promise ;                
        
    };
    self.getItemByIdFromCart = function (id) {
        console.log("getUniquecart");
        var deferred=$q.defer();
            return $http.get('http://localhost:5000/carts/'+ id)
            .then(function (response) {
                // promise is fulfilled
                console.log(response.data);
                deferred.resolve(response.data);
                // promise i s returned
                return deferred.promise;
            }, function (response) {
                // the following line rejects the promise 
                deferred.reject(response);
                // promise is returned
                return deferred.promise;
            });
        
    };
    self.updateCount=function(id,count){
       //console.log("updating Query",id,count);
       var deferred=$q.defer();
       $http.put("http://localhost:5000/items/"+id,{"count":count})
          .then(function(response){
           deferred.resolve(response.data.result);
          },function(error) {
               deferred.reject(error);
           });
          return deferred.promise;
   };


    self.increaseCartCount = function(id) {
      console.log("id",id);
       var resultIncrement='';
       self.getItemByIdFromCart(id)
           .then(function(result){
            console.log(result);
            console.log("quantity",result.result[0].quantity);
               count=result.result[0].quantity+1;
                var abc = self.updateCount(id,count)
                     .then(function(result1){
                          resultIncrement=result1;
                          return resultIncrement;
                     },function(error){})
           },function(error){

           });
         };

         self.decreaseCartCount = function(id) {
       var resultDecrement='';
       self.getItemByIdFromCart(id)
           .then(function(result){
               count=result.result[0].quantity-1;
                var abc = self.updateCount(id,count)
                     .then(function(result1){
                          resultIncrement=result1;
                          return resultDecrement;
                     },function(error){})
           },function(error){

           });
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

   


    
});