angular.module('starter.directives')

.directive('preventBounce', ['$ionicGesture', '$ionicSlideBoxDelegate', 
function ($ionicGesture, $ionicSlideBoxDelegate) {
  return {
    restrict: 'A',
    link    : function (scope, elem) {
      var reportEvent = function (e) {
        if (e.target.tagName.toLowerCase() === 'img' || e.target.tagName.toLowerCase() === 'video' || e.target.tagName.toLowerCase() === 'ion-slide') {
          $ionicSlideBoxDelegate.$getByHandle('pageSlidebox').enableSlide(false);
        } else {
          console.log (e.target);
          $ionicSlideBoxDelegate.$getByHandle('pageSlidebox').enableSlide(true);
        }
      };
      $ionicGesture.on('touch', reportEvent, elem);
      $ionicGesture.on('release', function() {
        $ionicSlideBoxDelegate.$getByHandle('pageSlidebox').enableSlide(true);
      }, elem);
    }
  };
}]);