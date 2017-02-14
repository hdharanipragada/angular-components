(function(){
  'use strict';
  var app = angular.module('app');

  app.component('footer', {
    // defines a two way binding in and out of the component
    bindings: {
      brand:'<'
     },
    // Load the template
    templateUrl: '/js/components/footerComponent.html',
    controller: function () {
    // A list of menus
      this.message = "Copy rights";
    }
  });
})();
