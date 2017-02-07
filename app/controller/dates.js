angular.module("ltApp").controller("DatesCtrl", ["$scope", "server", 
function($scope, server) {
    $scope.events = [];
    
    // get events from server
    server.getDates().then(function(data) {
        $scope.events = data;
    });
    
    this.getTicketLink = function(event) {
        if(event.ticketLink != null && event.ticketLink != "")
            return "<a target='_blank' href='" + event.ticketLink + "' >(tickets)</a>";
        return "";
    };
}]);