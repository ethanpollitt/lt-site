angular.module("adminApp").factory("server", ["$http", "$q", function($http, $q) {
    var func = {};
    
    func.getEvents = function() {
        var defer = $q.defer();
        var url = "/dates";
        
        $http.get(url)
            .success(function success(response) { defer.resolve(response); })
            .error(function error(response) { defer.reject(response); });
        return defer.promise;
    };
    
    func.createEvent = function(req) {
        var defer = $q.defer();
        var url = "/dates";
        var config = {
            body: req
        };
        
        $http.post(url, config)
            .success(function success(response) { defer.resolve(response); })
            .error(function error(response) { defer.reject(response); });
        return defer.promise;
    };
    
    func.deleteEvent = function(req) {
        var defer = $q.defer();
        var url = "/dates";
        var config = {
            params: req
        };
        
        $http.delete(url, config)
            .success(function success(response) { defer.resolve(response); })
            .error(function error(response) { defer.reject(response); });
        return defer.promise;        
    }
    
    return func;
}]);