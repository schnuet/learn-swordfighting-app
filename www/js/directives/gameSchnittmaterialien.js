angular.module('starter.directives')

.directive('gameSchnittmaterialien', ['$ionicGesture', 'DragNDropHelper', 'Campaign', 'GameHelper', 'Feedback',
function($ionicGesture, DragNDropHelper, Campaign, GameHelper, Feedback) {

  

  return {
    restrict: 'E',
    replace: true,
    link: function($scope, $element, $attributes) {

      $scope.game = {};

      var watches = DragNDropHelper.watchElement ($element);

      var itemsToPut = ['tatami', 'bottle', 'beach', 'tetra'];

      var onRight = function (e, droppedObject) {
        console.log (droppedObject);
        //var i = itemsToPut.indexOf (droppedObject.id);
        if (itemsToPut.indexOf(droppedObject.id) !== -1) {
          // put the object on its target
          DragNDropHelper.moveToTarget(droppedObject.target);
          // remove the entry in the list of todo items
          itemsToPut.splice(itemsToPut.indexOf(droppedObject.id), 1);
          console.log (itemsToPut);

          /* END OF GAME, all dressed up: */
          if (itemsToPut.length === 0) {
            Campaign.addEnd();
            Feedback.congratulation ('Reihenfolge erstellt', 'Die Reihenfolge stimmt! Du weißt über Schnittmaterialien Bescheid.');

            // restart the sliding of the page slider
            GameHelper.activateScrolling();
            $scope.vars.slideEnabled = true;
          }
        }
        else {
          DragNDropHelper.release();
          console.log (droppedObject.id + ' falsch.');
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


      $scope.$on('$destroy', function() {
        $element.remove();
        DragNDropHelper.removeWatches (watches);
      });

    },
    template : 
        '<div class="game-container schnittmaterialien">' +
          '<div class="row height-50">' +
            '<div class="col col-25">' +
              '<div id="tetra-target" class="drag-target"><div class="number">1</div></div>' +
            '</div>' +
            '<div class="col col-25">' +
              '<div id="bottle-target" class="drag-target"><div class="number">2</div></div>' +
            '</div>' +
            '<div class="col col-25">' +
              '<div id="beach-target" class="drag-target"><div class="number">3</div></div>' +
            '</div>' +
            '<div class="col col-25">' +
              '<div id="tatami-target" class="drag-target"><div class="number">4</div></div>' +
            '</div>' +
          '</div>' +
          '<div class="row height-50">' +
            '<div class="col col-25">' +
              '<img id="bottle" class="drag-item" src="./img/lessons/07/game/bottle.png">' +
            '</div>' +
            '<div class="col col-25">' +
              '<img id="tetra" class="drag-item" src="./img/lessons/07/game/tetra.png">' +
            '</div>' +
            '<div class="col col-25">' +
              '<img id="tatami" class="drag-item" src="./img/lessons/07/game/tatami.png">' +
            '</div>' +
            '<div class="col col-25">' +
              '<img id="beach" class="drag-item" src="./img/lessons/07/game/beach.png">' +
            '</div>' +
          '</div>' +
        '</div>'
  };
}]);