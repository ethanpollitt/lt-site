angular.module("ltApp").factory("server", ["$http", "$q", function($http, $q) {
    var func = {};
    var baseUrl = "/api";
    
    func.getDates = function() {
        var defer = $q.defer();
        var url = baseUrl + "/dates";
        
        $http.get(url)
            .success(function success(response) { defer.resolve(response); })
            .error(function error(response) { defer.reject(response); });
        return defer.promise;
    };
    
    func.getImages = function() {
        var defer = $q.defer();
        var url = baseUrl + "/images";
        
        $http.get(url)
            .success(function success(response) { defer.resolve(response); })
            .error(function error(response) { defer.reject(response); });
        return defer.promise;    
    };
    
    return func;
}]);