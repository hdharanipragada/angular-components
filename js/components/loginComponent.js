(function(){
  'use strict';
  var app = angular.module('app');

  app.component('login', {
    // defines a two way binding in and out of the component
    bindings: {
      brand:'<'
     },
    // Load the template
    templateUrl: '/js/components/loginComponent.html',
   /* $routeConfig: [
    { path: '/dashboard', component: 'dashboard', name: 'dashboard'},
    { path: '/forgotPassword', component: 'forgotPassword', name: 'forgotPasswords' },
    { path: '/Register', component: 'registerUser', name: 'registerUser' }
  ],*/
    controller: function ($state) {
    // A list of menus
      this.user = {};
      this.signIn =function(user){
        debugger;
        $state.go('dashboard');
       /* this.$router.navigate('dashboard');*/
      }
    }
  });
})();