angular.module('app')
    .service('LoginService', ['$http', function($http, ajaxServiceManager, myConfig) {

        var connection = "http://serve-angcomp.rhcloud.com/";

        this.username = "";

        var that = this;

        this.authenticateUser = function(user) {
            return $http({
                url: connection + 'api/users/',
                method: 'POST',
                data: user,
                headers: { "Accept": "application/json, text/plain, */*", "Content-Type": "application/json;", "Access-Control-Allow-Origin": "*" }
            });
        }
        this.registerUser = function(user) {

            return $http({
                url: connection + 'api/users/register',
                method: 'POST',
                data: user,
                headers: { "Accept": "application/json, text/plain, */*", "Content-Type": "application/json;", "Access-Control-Allow-Origin": "*" }
            });
        }

        this.setUser = function(name) {
            this.username = name;
        }

        this.showUser = function() {
            return this.username;
        }

    }]);
