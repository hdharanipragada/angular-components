(function() {
    'use strict';
    var app = angular.module('app');

    app.component('default', {
        // defines a two way binding in and out of the component
        bindings: {
            brand: '<'
        },
        // Load the template
        templateUrl: '../views/defaultComponent.html',
        controller: function(ProductService) {
            // A list of menus
            ProductService.getList().then(function(response) {
                console.log("success");
            }, function(error) {
                console.log(error);
            });
        }
    });
})();
