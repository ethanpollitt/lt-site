angular.module("ltApp").controller("MediaCtrl", ["$scope",  "server", 
function($scope, server) {
    $scope.images = [];
    
    // get events from server
    server.getImages().then(function(data) {
        if(data == null || data == undefined || !Array.isArray(data))
            return;
        
        data.forEach(function(obj, ind) {
            obj.date_real = new Date(obj.date);
            obj.fullscreen = false;
        });
        $scope.images = data;
    });
    
    $scope.openImage = function(image) {
        console.log("here1");
        image.fullscreen = true;
    };
    
    $scope.closeImage = function(image) {
        console.log("her32");
        image.fullscreen = false;
    };
    
}]);