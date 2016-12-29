(function(){
  'use strict';
  var app = angular.module('app');

  app.component('dashboard', {
    // defines a two way binding in and out of the component
    bindings: {
      brand:'<'
     },
    // Load the template
    templateUrl: '/js/components/dashboardComponent.html',
    controller: function () {
    // A list of menus
    this.msg = "Loading...";
    }
  });
})();