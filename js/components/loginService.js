angular.module('app')
.service('LoginService', ['$http', function($http, ajaxServiceManager) {

    var httpdata, connection = "http://localhost:9000/";

    this.authenticateUser = function(user) {
        return $http({
            url: connection + 'api/users/',
            method: 'POST',
            data: user,
            headers:{"Accept":"application/json, text/plain, */*","Content-Type":"application/json;","Access-Control-Allow-Origin":"*"}
        });
    }

}])