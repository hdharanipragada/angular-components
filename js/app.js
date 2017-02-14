 angular.module('app', ['ngRoute', 'ui.router']).
 config(function($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.when('/dashboard', '/dashboard/default');
     $stateProvider
         .state('login', {
             url: "/login",
             template: "<login></login>"
         })
         .state('register', {
             url: "/register",
             template: "<register></register>"
         })
         .state('dashboard', {
             url: "/dashboard",
             template: "<dashboard></dashboard>"
         }).state('home', {
             parent: 'dashboard',
             url: "/default",
             template: "<default></default>"
         })
     $urlRouterProvider.otherwise('/login');
 });
