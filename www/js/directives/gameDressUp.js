angular.module('starter.directives')

.directive('gameDressUp', ['$ionicGesture', '$ionicSlideBoxDelegate', 'DragNDropHelper',
function($ionicGesture, $ionicSlideBoxDelegate, DragNDropHelper) {

  

  return {
    restrict: 'E',
    scope: {
      winCallback : '&onwin'
    },
    replace: false,
    link: function($scope, $element, $attributes) {

      var watches = DragNDropHelper.watchElement ($element);

      var itemsToPutOn = ['helmet', 'pants'];

      var onRight = function (e, droppedObject) {
        console.log (droppedObject);
        var i = itemsToPutOn.indexOf (droppedObject.id);
        if (i !== -1) {
          itemsToPutOn.splice(i, 1);
          console.log (itemsToPutOn);
          if (itemsToPutOn.length === 0) {
            $scope.winCallback();
          }
          else console.log ('still got items to put on');
        }
        else {
          console.log (droppedObject.id + ' is not in item list.');
        }
      };

      $scope.$on ('dragndrop_right-target', onRight);

      /*
        prevent dragging of page slider:
      */
      var pageSlider = $ionicSlideBoxDelegate.$getByHandle('pageSlidebox');
      var reportEvent = function (e) {
        if (e.target.className.indexOf('drag-item') !== -1) {
          pageSlider.enableSlide(false);
        } else {
          pageSlider.enableSlide(true);
        }
      };
      $ionicGesture.on('touch', reportEvent, $element);

      

      $scope.$on('$destroy', function() {
        $element.remove();
        DragNDropHelper.removeWatches (watches);
      });

    }
  };
}]);