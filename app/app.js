angular.module("ltApp", ["ngRoute", "ui.bootstrap"]);

angular.module("ltApp").config(["$routeProvider", 
                                function ($routeProvider) {        
    $routeProvider.when("/", {
			templateUrl : "app/pages/home.html",
			controller  : "HomeCtrl",
			controllerAs : "homeCtrl"
		}).when("/dates", {
			templateUrl : "app/pages/dates.html",
			controller  : "DatesCtrl",
			controllerAs : "datesCtrl"
		}).when("/media", {
			templateUrl : "app/pages/media.html",
			controller  : "MediaCtrl",
            controllerAs : "mediaCtrl"
		}).when("/contact", {
			templateUrl : "app/pages/contact.html",
			controller  : "ContactCtrl",
            controllerAs : "contactCtrl"
		}).otherwise({
            redirectTo: "/"
        });
}]);

angular.module("ltApp").filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});