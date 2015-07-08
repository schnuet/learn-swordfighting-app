angular.module('starter.directives')

.directive('gameWatchSwordfight', ['$ionicGesture', 'Campaign', 'GameHelper', 'Feedback',
function($ionicGesture, Campaign, GameHelper, Feedback) {

  

  return {
    restrict: 'E',
    replace: true,
    link: function($scope, $element, $attributes) {

      $scope.game = {};

      $scope.game.instruction = '';

      // a list of all the different positions:
      var positions = ['zufechten', 'krieg', 'ringen'];
      var p_c = ['zufechten', 'krieg', 'ringen'];
      var currentPosition = '';
      var currentOrder = '';

      var finishedButton = null;

      // the active element:
      var zieher_el = null;
      var init_l = 0;

      var dX = 0;
      var dragOK = false;


      var getNextPosition = function () {
        if (positions.length === 0) return false;
        currentOrder = positions.splice(Math.floor(Math.random() * (positions.length)), 1)[0];
        $scope.game.instruction = currentOrder.charAt(0).toUpperCase() + currentOrder.substr(1);
      };

      var checkPosition = function () {
        if (currentOrder === currentPosition) {
          var picNum = p_c.indexOf(currentPosition) + 1;
          Feedback.congratulation ('Gut getroffen. So sieht ' + $scope.game.instruction + ' mit echten Leuten aus:', '<img src="./img/lessons/09/Abstand/0'+picNum+'.png">', true)
          .then(function () {
            if (getNextPosition() === false) {
              Feedback.congratulation ('Das Spiel ist bestanden!', 'Du konntest alle Positionen finden! Herzlichen Glückwunsch!');
              Campaign.addEnd();
              GameHelper.activateScrolling();
              $scope.vars.slideEnabled = true;
              $scope.game.instruction = 'Fertig';
              finishedButton[0].disabled = true;
              angular.element(document.getElementById('mensur-instruction-box')).addClass('resolved');
            }
          });
        }
        else {
          Feedback.sorry ('Leider noch nicht.', 'Such noch etwas weiter, ' + $scope.game.instruction + ' ist nicht hier.');
        }
      };

      $scope.game.start = function () {
        // hide the instruction screen
        document.getElementById('preGameScreen').className = 'hidden';

        // stop the sliding of the page slider
        GameHelper.deactivateScrolling();
        $scope.vars.slideEnabled = false;

        // get the draggable element:
        zieher_el = angular.element(document.getElementById('abstand_zieher'));
        init_l = zieher_el[0].offsetLeft;
        console.log (init_l);

        finishedButton = angular.element(document.getElementById('finishedButton'));
        finishedButton.on ('click', checkPosition);

        getNextPosition();
        // wir starten im zufechten:
        currentPosition = 'zufechten';
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

    },
    template: '<div class="game-container watch-swordfight">' +
         '<div class="row height-67"> ' +
           
         '</div>' +
         '<div class="row height-33">' +
           
         '</div>' +
       '</div>'
  };
}]);