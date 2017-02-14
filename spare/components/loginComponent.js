(function() {
    'use strict';
    var app = angular.module('app');
    app.component('login', {
        templateUrl: '/js/components/loginComponent.html',
        controller: function($state, LoginService) {
            var ctrl = this;
            ctrl.user = {};
            ctrl.signIn = function(user) {
                LoginService.authenticateUser(user).then(function successCallback(oResponse) {
                    console.log(oResponse);
                    $state.go('dashboard');
                }, function errorCallback(oResponse) {
                    console.log("operation failed");
                    return oResponse.data;
                });
            }
        }
    })
})();
