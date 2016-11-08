angular.module("ltApp").controller("MediaCtrl", function($scope) {
    var slides = $scope.slides = [];
    
    var getSlides = function() {
        var idx = 0;
        slides.push({image: 'img/IMG_1986.jpg', text: '', id: idx++});
        slides.push({image: 'img/IMG_1994.jpg', text: '', id: idx++});
        slides.push({image: 'img/IMG_1996.jpg', text: '', id: idx++});
    };
    getSlides();
});