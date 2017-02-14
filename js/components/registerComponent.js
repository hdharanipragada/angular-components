(function() {
    'use strict';
    var app = angular.module('app');

    app.component('register', {
        // defines a two way binding in and out of the component
        bindings: {
            brand: '<'
        },
        // Load the template
        templateUrl: '../views/registerComponent.html',
        controller: function($state, LoginService) {
            var ctrl = this;
            ctrl.user = {};
            ctrl.register = function(user) {
                if (user.password === user.cnfrmpassword) {
                    LoginService.registerUser(user).then(function successCallback(oResponse) {
                        console.log(oResponse);
                        $state.go('login');
                    }, function errorCallback(oResponse) {
                        console.log("operation failed");
                        return oResponse.data;
                    });
                }

            }
        }
    });
})();
