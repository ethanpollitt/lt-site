angular.module("adminApp").controller("DatesCtrl", ["$scope", "$window", "server", 
function($scope, $window, server) {
    $scope.events = [];
    $scope.date = null;
    $scope.city = null;
    $scope.state = null;
    $scope.venue = null;
    $scope.ticketLink = null;
    
    // get events from server
    server.getEvents().then(function(data) {
        data.forEach(function(obj, ind) {
            obj.date_real = new Date(obj.date);
        });
        $scope.events = data;
    });
    
    $scope.getTicketLink = function(event) {
        if(event.ticketLink != null && event.ticketLink != "")
            return "<a target='_blank' href='" + event.ticketLink + "' >(tickets)</a>";
        return "";
    };
    
    $scope.submit = function() {
        var req = {
            date: $scope.date,
            city: $scope.city,
            state: $scope.state,
            venue: $scope.venue,
            ticketLink: $scope.ticketLink
        };
        
        server.createEvent(req).then(function(res) {
            $window.location.reload();
        });
    };
    
    $scope.delete = function(event) {
        server.deleteEvent({id: event._id}).then(function(res) {
            if(res.error == false)
                $window.location.reload();
            else
                alert("Not successful!");
        });
    };
}]);