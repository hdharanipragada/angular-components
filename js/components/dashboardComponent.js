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
    controller: function (SearchService) {
             var ctrl=this;
            SearchService.getList().then(function(response) {
                ctrl.frequentlyOrdered = response.data;
            }, function(error) {
                console.log(error);
            });
            
          ctrl.loadCurrentItem = function(index){
            var requested = ctrl.frequentlyOrdered[index];
          }
    }
  });
})();