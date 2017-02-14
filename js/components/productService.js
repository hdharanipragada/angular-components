angular.module('app')
    .service('ProductService', ['$http', function($http, ajaxServiceManager, myConfig) {

    	 var connection = "http://serve-angcomp.rhcloud.com/";

    	  var that = this;

    	 this.getList = function(){
    	 	  return $http({
                url: connection + 'api/medicines/',
                method: 'GET',
                headers: { "Accept": "application/json, text/plain, */*", "Content-Type": "application/json;", "Access-Control-Allow-Origin": "*" }
            });
    	 }

    }])
