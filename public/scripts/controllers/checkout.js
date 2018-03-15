
angular.module('shopping_App').controller("homeController", function ($scope, $q, jsonService) {
 
    jsonService.getAccount()
        .then(
            function (result) {
                
                  

                
            },
            function (error) {
                // handle errors here
                console.log(error.statusText);
            }
        );

        
});




