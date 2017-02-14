angular.module('app')
    .service('SearchService', ['$http', function($http, ajaxServiceManager, myConfig) {

        var connection = "http://localhost:9000/";

        var that = this;

        this.getList = function(searchItem) {
            return $http({
                url: connection + 'api/medicines/',
                method: 'GET',
                params: { Name : searchItem },
                headers: { "Accept": "application/json, text/plain, */*", "Content-Type": "application/json;", "Access-Control-Allow-Origin": "*" }
            });
        }

    }])
