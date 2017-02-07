angular.module("ltApp").factory("server", ["$http", "$q", function($http, $q) {
    var func = {};
    
    func.getDates = function() {
        var defer = $q.defer();
        var url = "/dates";
        
        $http.get(url)
            .success(function success(response) { defer.resolve(response); })
            .error(function error(response) { defer.reject(response); });
        return defer.promise;
    };
    
    return func;
}]);