angular.module('starter.directives')

.directive('gameDressUp', ['$ionicGesture', 'DragNDropHelper', 'Campaign', 'GameHelper', 'Feedback',
function($ionicGesture, DragNDropHelper, Campaign, GameHelper, Feedback) {

  

  return {
    restrict: 'E',
    replace: false,
    link: function($scope, $element, $attributes) {

      $scope.game = {};

      var watches = DragNDropHelper.watchElement ($element);

      var itemsToPutOn = ['breast', 'neck', 'jacket', 'knee', 'headthing', 'hand', 'helmet'];

      var differentPoses = document.getElementsByClassName('bg-image');
      var posesLength = differentPoses.length;

      var onRight = function (e, droppedObject) {
        console.log (droppedObject);
        //var i = itemsToPutOn.indexOf (droppedObject.id);
        if (droppedObject.id === itemsToPutOn[0]) {
          DragNDropHelper.moveToTarget(droppedObject.target);
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

          /* END OF GAME, all dressed up: */
          if (itemsToPutOn.length === 0) {
            
            Feedback.congratulation ('Bereit zum Kampf', 'Alle Rüstungsteile wurden erfolgreich angezogen, das Spiel ist bestanden!')
            .then(function () {
              Campaign.addEnd();
            });

            // restart the sliding of the page slider
            GameHelper.activateScrolling();
            $scope.vars.slideEnabled = true;
          }
        }
        else {
          DragNDropHelper.release();
          console.log (droppedObject.id + ' can not be worn right now.');
        }
      };

      $scope.$on ('dragndrop_right-target', onRight);

      $scope.game.start = function () {
        document.getElementById('preGameScreen').className = 'hidden';
        // stop the sliding of the page slider
        GameHelper.deactivateScrolling();
        $scope.vars.slideEnabled = false;
      };

      /*
        prevent dragging of page slider:
      */
      var pageSlider = GameHelper.getPageSlider();
      $ionicGesture.on('touch', GameHelper.preventSlide, $element);

      // limiting the size of the person: (needed for aspect ratio preservation)
      // in timeout to let the page load first
      setTimeout(function() {
        var apc = document.getElementsByClassName('aspect-ratio-container')[0];
        var mw = (document.getElementsByClassName('game-container')[0].offsetHeight-44)/2;
        document.getElementsByClassName('width-limiter')[0].style.maxWidth = mw + 'px';
        //apc.style.left = 'calc((100% - '+mw+'px) / 2)';
        //console.log (apc.style);
      }, 1000);
      

      $scope.$on('$destroy', function() {
        $element.remove();
        DragNDropHelper.removeWatches (watches);
      });

    }
  };
}]);