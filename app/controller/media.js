angular.module("ltApp").controller("MediaCtrl", function($scope) {
    var slides = $scope.slides = [];
    
    var getSlides = function() {
        var idx = 0;
        slides.push({image: 'img/IMG_4812.jpg', text: 'Photo Credit: Ana Massard', id: idx++});
        slides.push({image: 'img/IMG_4838.jpg', text: 'Photo Credit: Ana Massard', id: idx++});
        slides.push({image: 'img/IMG_4872.jpg', text: 'Photo Credit: Ana Massard', id: idx++});
        slides.push({image: 'img/IMG_4879.jpg', text: 'Photo Credit: Ana Massard', id: idx++});
        slides.push({image: 'img/IMG_4885.jpg', text: 'Photo Credit: Ana Massard', id: idx++});
        slides.push({image: 'img/IMG_4941.jpg', text: 'Photo Credit: Ana Massard', id: idx++});
        slides.push({image: 'img/IMG_4983.jpg', text: 'Photo Credit: Ana Massard', id: idx++});
        slides.push({image: 'img/IMG_1986.jpg', text: 'Photo Credit: Ana Massard', id: idx++});
        slides.push({image: 'img/IMG_1994.jpg', text: 'Photo Credit: Ana Massard', id: idx++});
        slides.push({image: 'img/IMG_1996.jpg', text: 'Photo Credit: Ana Massard', id: idx++});
        slides.push({image: 'img/IMG_2026.jpg', text: 'Photo Credit: Ana Massard', id: idx++});
        slides.push({image: 'img/IMG_2036.jpg', text: 'Photo Credit: Ana Massard', id: idx++});
        slides.push({image: 'img/IMG_2063.jpg', text: 'Photo Credit: Ana Massard', id: idx++});
        slides.push({image: 'img/IMG_2082.jpg', text: 'Photo Credit: Ana Massard', id: idx++});
        slides.push({image: 'img/IMG_2129.jpg', text: 'Photo Credit: Ana Massard', id: idx++});
        slides.push({image: 'img/IMG_2163.jpg', text: 'Photo Credit: Ana Massard', id: idx++});
        slides.push({image: 'img/IMG_2242.jpg', text: 'Photo Credit: Ana Massard', id: idx++});
        slides.push({image: 'img/IMG_2249.jpg', text: 'Photo Credit: Ana Massard', id: idx++});
        slides.push({image: 'img/IMG_2299.jpg', text: 'Photo Credit: Ana Massard', id: idx++});
        slides.push({image: 'img/Losing_Teeth-33.jpg', text: '', id: idx++});
        slides.push({image: 'img/Losing_Teeth-36.jpg', text: '', id: idx++});
        slides.push({image: 'img/Losing_Teeth-39.jpg', text: '', id: idx++});
    };
    getSlides();
});