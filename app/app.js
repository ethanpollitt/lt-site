angular.module("ltApp", ["ngRoute"]);

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
		}).otherwise({
            redirectTo: "/"
        });
}]);