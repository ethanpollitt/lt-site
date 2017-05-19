angular.module("ltApp").controller("DatesCtrl", ["$scope", "server", 
function($scope, server) {
    $scope.events = [];
    
    // get events from server
    server.getDates().then(function(data) {
        if(data == null || data == undefined || !Array.isArray(data))
            return;
        
        data.forEach(function(obj, ind) {
            obj.date_real = new Date(obj.date);
        });
        $scope.events = data;
    });
    
    this.getTicketLink = function(event) {
        if(event.ticketLink != null && event.ticketLink != "")
            return "<a target='_blank' href='" + event.ticketLink + "' >(tickets)</a>";
        return "";
    };
}]);