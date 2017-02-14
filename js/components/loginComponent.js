(function() {
    'use strict';
    var app = angular.module('app');
    app.component('login', {
        templateUrl: '../views/loginComponent.html',
        controller: function($state, LoginService) {
            var ctrl = this;
            ctrl.user = {};
            ctrl.signIn = function(user) {
                LoginService.authenticateUser(user).then(function successCallback(oResponse) {
                    LoginService.setUser(oResponse.data.uname);
                    $state.go('dashboard');
                }, function errorCallback(error) {
                    console.log("operation failed");
                    return error;
                });

            }
        }
    })
})();
