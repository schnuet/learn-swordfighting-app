angular.module('starter.directives')

.directive('gamePullPosition', ['$ionicGesture', '$ionicSlideBoxDelegate', 'CssDoctor',
function($ionicGesture, $ionicSlideBoxDelegate, CssDoctor) {

  

  return {
    restrict: 'E',
    scope: {
      winCallback : '&onwin'
    },
    replace: true,
    link: function($scope, $element, $attributes) {

      var canvasElement = $element.find ('canvas');
      var canvas = canvasElement[0];
      var ctx = canvas.getContext ("2d");

      console.log (ctx);
      var offsets = CssDoctor.getOffsetsInParent (canvas, 'slider-slide');

      ctx.beginPath();
      ctx.moveTo(30, 30);
      ctx.lineTo(100, 30);
      ctx.lineTo(100, 100);
      ctx.lineTo(30, 100);
      ctx.lineTo(30, 30);
      ctx.closePath();
      ctx.fill();

      var globalToLocalX = function (x) {
        var lx = x - offsets.left - 5;
        return lx;
      };
      var globalToLocalY = function (y) {
        // there is a strange bug when trying to get the offset the normal way, 
        // so we substract the head bar manually: 
        var ly = y - offsets.top - 44 -5;
        return ly;
      };

      var dX = 0;
      var dY = 0;

      var dragStart = function (e) {
        dX = globalToLocalX(e.gesture.srcEvent.x);
        dY = globalToLocalY(e.gesture.srcEvent.y);
        ctx.moveTo(dX, dY);
        ctx.beginPath();
      };
      var drag = function (e) {
        ctx.lineTo(dX + e.gesture.deltaX, dY + e.gesture.deltaY);
        //ctx.fillRect(dX + e.gesture.deltaX, dY + e.gesture.deltaY, 10, 10);
      };
      var dragEnd = function (e) {
        //ctx.closePath();
        ctx.stroke();
        console.log (e);
      };

      $ionicGesture.on('dragstart', dragStart, canvasElement);
      $ionicGesture.on('drag', drag, canvasElement);
      $ionicGesture.on('release', dragEnd, canvasElement);

      /*
        prevent dragging of page slider:
      */
      var pageSlider = $ionicSlideBoxDelegate.$getByHandle('pageSlidebox');
      var reportEvent = function (e) {
        if (e.target.id === 'gameCanvas') {
          pageSlider.enableSlide(false);
        } else {
          pageSlider.enableSlide(true);
        }
      };
      $ionicGesture.on('touch', reportEvent, $element);

      

      $scope.$on('$destroy', function() {
        $element.remove();
      });

    }, 
    template: '<div class="game-container pull-position">'+
                '<canvas width="800px" height="450px" id="gameCanvas"></canvas>' +
              '</div>'
  };
}]);