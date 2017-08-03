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
            obj.class = {"height": "0"};
        });
        $scope.images = data;
    });
    
//    $scope.openImage = function(image) {
//        console.log("open", image._id, image.class);
//        image.class = {"height": "100%"};
//    };
    
    $scope.closeImage = function(image) {
        console.log("close", image._id, image.class);
        image.class = {"height": "0"};
    };
    
}]);