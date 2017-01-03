(function() {
    'use strict';
    var app = angular.module('app');

    app.service('ajaxServiceManager', ['$http', function($http) {

        this.fnQuery = function(httpdata) {
            return $http({
                url: httpdata.url,
                method: httpdata.method,
                params: httpdata.params,
                data: httpdata.data
            }).then(function successCallback(oResponse) {
                return oResponse.data;
            }, function errorCallback(oResponse) {
                console.log("operation failed");
                return oResponse.data;
            });
        };
    }]);
})
