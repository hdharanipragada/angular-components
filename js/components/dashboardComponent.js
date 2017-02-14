(function(){
  'use strict';
  var app = angular.module('app');

  app.component('dashboard', {
    // defines a two way binding in and out of the component
    bindings: {
      brand:'<'
     },
    // Load the template
    templateUrl: '../views/dashboardComponent.html',
    controller: function (ProductService) {
    // A list of menus
    ProductService.getList().then(function(response) {
                console.log(response);
            }, function(error) {
                console.log(error);
            });
    }
  });
})();