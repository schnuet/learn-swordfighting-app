angular.module('starter.directives')

.directive('gameMensur', ['$ionicGesture', 'Campaign', 'GameHelper', 'Feedback',
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
            console.log ('ZUFECHTEN');
            currentPosition = 'zufechten';
          }
          else if (percentMove < 0.645) {
            // 02 - Kampfabstand
            console.log ('KRIEG');
            currentPosition = 'krieg';
          }
          else if (percentMove < 0.82) {
            // 03 - Nahkampfabstand
            console.log ('RINGEN');
            currentPosition = 'ringen';
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

        // connect the events
        $ionicGesture.on('dragstart', dragStart, $element);
        $ionicGesture.on('drag', drag, $element);
        $ionicGesture.on('release', dragEnd, $element);

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
    template: '<div class="game-container mensur">' +
         '<div class="row height-67"> ' +
           '<div id="abstand_ziehbereich" class="col height-100 ziehbereich">' +
             '<div id="abstand_zieher"></div>' +
             '<div id="abstand_ziel"></div>' +
           '</div>' +
         '</div>' +
         '<div class="row height-33">' +
           '<div class="col">' +
              '<h5>Zurechtziehen</h5>' +
              '<p>Ziehe den linken Krieger an die passende Position für die jeweils angezeigte Distanz.</p>' +
           '</div>' +
           '<div class="col instruction-box" id="mensur-instruction-box">' +
              '<h5>Bewege ihn zum:</h5>' +
              '<span>{{game.instruction}}</span>' +
           '</div>' +
           '<div class="col button-box">' +
              '<button class="button button-balanced" id="finishedButton">Fertig</button>' +
           '</div>' +
         '</div>' +
       '</div>'
  };
}]);