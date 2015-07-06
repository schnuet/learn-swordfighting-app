angular.module('starter.directives')

.directive('gameMensur', ['$ionicGesture', '$ionicSlideBoxDelegate', 'Campaign', 'GameHelper',
function($ionicGesture, $ionicSlideBoxDelegate, Campaign, GameHelper) {

  

  return {
    restrict: 'E',
    replace: false,
    link: function($scope, $element, $attributes) {

      $scope.game = {};

/*      var onRight = function (e, droppedObject) {
        console.log (droppedObject);
        //var i = itemsToPutOn.indexOf (droppedObject.id);
        if (droppedObject.id === itemsToPutOn[0]) {
          itemsToPutOn.splice(0, 1);
          console.log (itemsToPutOn);
          for (var i = 0; i < posesLength; i++) {
            if (differentPoses[i].id === droppedObject.id + '-bg') {
              angular.element (differentPoses[i]).removeClass('hidden');
            } 
            else {
              angular.element (differentPoses[i]).addClass('hidden');
            }
          }

          // END OF GAME, all dressed up: 
          if (itemsToPutOn.length === 0) {
            Campaign.addEnd();

            // restart the sliding of the page slider
            GameHelper.activateScrolling();
            $scope.vars.slideEnabled = true;
          }
        }
        else {
          console.log (droppedObject.id + ' can not be worn right now.');
        }
      };

      $scope.$on ('dragndrop_right-target', onRight);*/

      // the active element:
      var zieher_el = null;
      var init_l = 0;

      var dX = 0;
      var dragOK = false;

      var dragStart = function (e) {
        if (e.target.id === 'abstand_zieher') {
          dragOK = true;
          zieher_el.addClass('dragged-item');
        }
      };
      var drag = function (e) {
        if (dragOK === true) {
          zieher_el[0].style[ionic.CSS.TRANSFORM] = 'translate3d('+(dX + e.gesture.deltaX)+'px, 0px, 0px)';
        }
      };
      var dragEnd = function (e) {
        if (dragOK === true) {
          zieher_el.removeClass('dragged-item');
          console.log (e.gesture.deltaX);
          var zb = document.getElementById('abstand_ziehbereich');
          var zbh = zb.offsetWidth;
          dX += e.gesture.deltaX;

          // check distance
          var percentMove = (dX + zieher_el[0].offsetWidth/2)/zbh;
          if (percentMove < 0.19) {
            // NOTHING HAPPENS
          }
          else if (percentMove < 0.46) {
            // 01 - big Abstand
            console.log ('BIG');
          }
          else if (percentMove < 0.645) {
            // 02 - Kampfabstand
            console.log ('MIDDLE');
          }
          else if (percentMove < 0.82) {
            // 03 - Nahkampfabstand
            console.log ('SMALL');
          }

          // reset in bounds when out of bounds
          if (percentMove < 0.05) {
            dX = 0;
            zieher_el[0].style[ionic.CSS.TRANSFORM] = 'translate3d('+(dX)+'px, 0px, 0px)';
          }
          else if (percentMove > 0.85) {
            dX = 0.72 * zbh - zieher_el[0].offsetWidth/2;
            zieher_el[0].style[ionic.CSS.TRANSFORM] = 'translate3d('+(dX)+'px, 0px, 0px)';
          }

          dragOK = false;
        }
      };

      $scope.game.start = function () {
        // hide the instruction screen
        document.getElementById('preGameScreen').className = 'hidden';

        // stop the sliding of the page slider
        GameHelper.deactivateScrolling();
        $scope.vars.slideEnabled = false;

        // connect the events
        $ionicGesture.on('dragstart', dragStart, $element);
        $ionicGesture.on('drag', drag, $element);
        $ionicGesture.on('release', dragEnd, $element);

        // get the draggable element:
        zieher_el = angular.element(document.getElementById('abstand_zieher'));
        init_l = zieher_el[0].offsetLeft;
        console.log (init_l);
      };

      /*
        prevent dragging of page slider:
      */
      var pageSlider = GameHelper.getPageSlider();
      $ionicGesture.on('touch', GameHelper.preventSlide, $element);

      // limiting the size of the person: (needed for aspect ratio preservation)
      // in timeout to let the page load first
      /*setTimeout(function() {
        var apc = document.getElementsByClassName('aspect-ratio-container')[0];
        var mw = (document.getElementsByClassName('game-container')[0].offsetHeight-44)/2;
        document.getElementsByClassName('width-limiter')[0].style.maxWidth = mw + 'px';
        //apc.style.left = 'calc((100% - '+mw+'px) / 2)';
        //console.log (apc.style);
      }, 1000);*/
      

      $scope.$on('$destroy', function() {
        $element.remove();
      });

    }
  };
}]);