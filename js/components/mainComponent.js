(function(){
  'use strict';
  var app = angular.module('app');

  app.component('main', {
    // defines a two way binding in and out of the component
    bindings: {
      brand:'<'
     },
    // Load the template
    templateUrl: '/js/components/mainComponent.html',
    controller: function () {
    // A list of menus
      this.menu ="Here";
    }
  });
})();