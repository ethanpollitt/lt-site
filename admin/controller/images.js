angular.module("adminApp").controller("ImagesCtrl", ["$scope", "$window", "server", 
function($scope, $window, server) {
    $scope.showForm = false;
    
    $scope.images = [];
    $scope.date = null;
    $scope.text = null;
    $scope.path = null;
    
    // get events from server
    server.getImages().then(function(data) {
        if(data == null || data == undefined || !Array.isArray(data))
            return;
        
        data.forEach(function(obj, ind) {
            obj.date_real = new Date(obj.date);
        });
        $scope.images = data;
    });
        
    $scope.submit = function() {
        var req = {
            date: $scope.date,
            text: $scope.text,
            path: $scope.path
        };
        
        server.createImage(req).then(function(res) {
            $window.location.reload();
        });
    };
    
    $scope.delete = function(image) {
        server.deleteImage({id: image._id}).then(function(res) {
            if(res.error == false)
                $window.location.reload();
            else
                alert("Not successful!");
        });
    };
}]);