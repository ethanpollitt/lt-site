angular.module("adminApp").factory("server", ["$http", "$q", function($http, $q) {
    var func = {};
    var auth = null;
    var baseUrl = "/api";
    
    func.getAuth = function() {
        var defer = $q.defer();
        var url = baseUrl + "/auth";
        
        $http.get(url)
            .success(function success(response) { 
                if(!(response.err && response.auth))
                    defer.reject(response)
                auth = response.key;
                defer.resolve(); 
            })
            .error(function error(response) { defer.reject(response); });
        return defer.promise;
    };
    
    // ------------------------------------------------------
    // Event APIs
    
    func.getEvents = function() {
        var defer = $q.defer();
        var url = baseUrl + "/dates";
        
        var authProm = auth == null ? func.getAuth() : $q.when();
        
        $http.get(url)
            .success(function success(response) { defer.resolve(response); })
            .error(function error(response) { defer.reject(response); });
        return defer.promise;
    };
    
    func.createEvent = function(req) {
        var defer = $q.defer();
        var url = baseUrl + "/dates";
        
        // TODO: validation
        
        var config = {
            body: req
        };
        
        var authProm = auth == null ? func.getAuth() : $q.when();
        
        $http.post(url, config)
            .success(function success(response) { defer.resolve(response); })
            .error(function error(response) { defer.reject(response); });
        return defer.promise;
    };
    
    func.deleteEvent = function(req) {
        var defer = $q.defer();
        var url = baseUrl + "/dates";
        
        // TODO: validation
        
        var config = {
            params: req
        };
        
        var authProm = auth == null ? func.getAuth() : $q.when();
        
        $http.delete(url, config)
            .success(function success(response) { defer.resolve(response); })
            .error(function error(response) { defer.reject(response); });
        return defer.promise;        
    };
    
    // ------------------------------------------------------
    // Image APIs
    
    func.getImages = function() {
        var defer = $q.defer();
        var url = baseUrl + "/images";
        
        var authProm = auth == null ? func.getAuth() : $q.when();
        
        $http.get(url)
            .success(function success(response) { defer.resolve(response); })
            .error(function error(response) { defer.reject(response); });
        return defer.promise;    
    };
    
    func.getImage = function(req) {
        var defer = $q.defer();
        var url = baseUrl + "/image/";
        
        if(isEmpty(req.id)) {
            // TODO throw error
            console.log("empty ID for request!");
            return null;
        }
        
        url += req.id;
        
        var authProm = auth == null ? func.getAuth() : $q.when();
        
        $http.post(url)
            .success(function success(response) { defer.resolve(response); })
            .error(function error(response) { defer.reject(response); });
        return defer.promise;
    };
    
    func.createImage = function(req) {
        var defer = $q.defer();
        var url = baseUrl + "/images";
        
        // TODO: validation
        
        var config = {
            body: req
        };
        
        var authProm = auth == null ? func.getAuth() : $q.when();
        
        $http.post(url, config)
            .success(function success(response) { defer.resolve(response); })
            .error(function error(response) { defer.reject(response); });
        return defer.promise;
    };
    
    func.deleteImage = function(req) {
        var defer = $q.defer();
        var url = baseUrl + "/images";
        
        // TODO: validation
        
        var config = {
            params: req
        };
        
        var authProm = auth == null ? func.getAuth() : $q.when();
        
        $http.delete(url, config)
            .success(function success(response) { defer.resolve(response); })
            .error(function error(response) { defer.reject(response); });
        return defer.promise;        
    };
        
    
    function isEmpty(obj) {
        if(obj === undefined || obj === null || obj === "")
            return true;
        return false;
    };
    
    return func;
}]);