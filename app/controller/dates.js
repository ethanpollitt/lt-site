angular.module("ltApp").controller("DatesCtrl", function($scope) {
    this.events = [
        {"date": "04.07.2017", "city": "Lawrence", "state": "SC", "venue": "SOME PLACE WITH A BIG NAME", "ticketLink": "http://google.com"},
        {"date": "04.08.2017", "city": "Lawrence", "state": "SC", "venue": "SOME PLACE", "ticketLink": null},
        {"date": "04.09.2017", "city": "Lawrence", "state": "SC", "venue": "SOME PLACE", "ticketLink": null},
        {"date": "04.11.2017", "city": "Lawrence", "state": "SC", "venue": "SOME PLACE WITH A BIG NAME", "ticketLink": null}
    ];
    
    this.getTicketLink = function(event) {
        if(event.ticketLink != null && event.ticketLink != "")
            return "<a target='_blank' href='" + event.ticketLink + "' >(tickets)</a>";
        return "";
    };
});