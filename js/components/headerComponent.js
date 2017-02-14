(function() {
    'use strict';
    var app = angular.module('app');

    app.component('header', {
        // Load the template
        templateUrl: '../views/headerComponent.html',
        controller: function($state, LoginService, SearchService) {
            var ctrl = this;
            ctrl.username = LoginService.showUser();
            ctrl.logOut = function(name) {
                LoginService.setUser("");
                $state.go('login');
            }
            ctrl.fetchSearch = function(searchItem) {
                if(searchItem!==""){
                    SearchService.getList(searchItem).then(function(response) {
                    console.log(response);
                }, function(error) {
                    console.log(error);
                });
                }
               

            }

        }
    });
})();
