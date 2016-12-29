 angular.module('app', ['ngRoute','ui.router']).
    config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: "/login",
           template:"<login></login>"
        })
         .state('dashboard', {
            url: "/dashboard",
           template:"<dashboard></dashboard>"
        })
         $urlRouterProvider.otherwise('/login');
});