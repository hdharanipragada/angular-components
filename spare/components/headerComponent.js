(function(){
  'use strict';
  var app = angular.module('app');

  app.component('header', {
    // defines a two way binding in and out of the component
    bindings: {
      brand:'<'
     },
    // Load the template
    templateUrl: '/js/components/headerComponent.html',
    controller: function () {
    // A list of menus
      this.menu = [{
        name: "Home",
        component: "home"
      }, {
        name: "About",
        component: "about"
      }, {
        name: "Contact",
        component: "contact"
      }];
    }
  });
})();