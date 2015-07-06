angular.module('starter.directives')

.directive('gameCuttingUp', ['$ionicGesture', '$ionicSlideBoxDelegate', 'CssDoctor', '$timeout', 'GameHelper',
function($ionicGesture, $ionicSlideBoxDelegate, CssDoctor, $timeout, GameHelper) {

  

  return {
    restrict: 'E',
    replace: true,
    link: function($scope, $element, $attributes) {

      // create a var 
      var doneRight = 0;

      // get the image of the person:
      var personImg = $element.find('img')[0];

      // get the canvas and create the context
      var canvasElement = $element.find('canvas');
      var canvas = canvasElement[0];
      var ctx = canvas.getContext ("2d");

      console.log (ctx);
      var offsets = CssDoctor.getOffsetsInParent (canvas, 'slider-slide');

      ctx.strokeStyle = 'red';
      ctx.lineWidth = '5';

      console.log (personImg);

      // only able to draw when this variable is set to true:
      var canDraw = false;

      var globalToLocalX = function (x) {
        var lx = x - offsets.left ;
        return lx;
      };
      var globalToLocalY = function (y) {
        // there is a strange bug when trying to get the offset the normal way, 
        // so we substract the head bar manually: 
        var ly = y - offsets.top - 44 ;
        return ly;
      };

      var dX = 0;
      var dY = 0;
      var pointsOnLine = [];
      var successfullStart = false;

      var dragStart = function (e) {
        if (canDraw === false) return;
        pointsOnLine = [];
        dX = globalToLocalX(e.gesture.srcEvent.x);
        dY = globalToLocalY(e.gesture.srcEvent.y);
        //ctx.moveTo(dX, dY);
        //ctx.beginPath();
        pointsOnLine.push([dX, dY]);
        successfullStart = true;
      };
      var drag = function (e) {
        if (canDraw === false) return;
        pointsOnLine.push([dX + e.gesture.deltaX, dY + e.gesture.deltaY]);
      };
      var dragEnd = function (e) {
        if (canDraw === false || successfullStart === false) return;
        successfullStart = false;
        canDraw = false;
        //ctx.closePath();
        //ctx.stroke();

        var length = pointsOnLine.length;

        // check if the stroke was long enough:
        if (e.gesture.distance < 130) {
          // FALSE.
          $scope.game.instruction = 'ZU KURZ!';
        }
        // check if the stroke was made in the right direction:
        // descending, the start should not be lower than the end:
        else if (isOberhau && (pointsOnLine[0][1] > pointsOnLine[length-1][1])) {
          // FALSE.
          $scope.game.instruction = 'DER OBERHAU GEHT ANDERS!';
        }
        // ascending, the start should not be higher than the end:
        else if (isOberhau === false && (pointsOnLine[0][1] < pointsOnLine[length-1][1])) {
          // FALSE.
          $scope.game.instruction = 'DER UNTERHAU GEHT ANDERS!';
        }
        else if (isRechts && (pointsOnLine[0][0] > pointsOnLine[length-1][0])) {
          // FALSE.
          $scope.game.instruction = 'FALSCHE RICHTUNG! NACH RECHTS!';
        }
        else if (isRechts === false && (pointsOnLine[0][0] < pointsOnLine[length-1][0])) {
          // FALSE.
          $scope.game.instruction = 'FALSCHE RICHTUNG! NACH LINKS!';
        }
        else {
          // if more than 70% of the points were in the right area, it was done right.
          var percentRight = checkLine (pointsOnLine)
          console.log (percentRight);
          if (percentRight > 0.7) {
            // RIGHT!
            $scope.game.instruction = 'RICHTIG!';
          }
          else {
            // FALSE!
            $scope.game.instruction = 'ZU UNGENAU!';
          }
        }
        $scope.$apply();
        
        // draw the stroke:
        ctx.moveTo(pointsOnLine[length-1][0], pointsOnLine[length-1][1]);
        ctx.beginPath();
        var i = length;
        while (i--) {
          ctx.lineTo (pointsOnLine[i][0], pointsOnLine[i][1]);
        }
        ctx.stroke();

        // reset the points for the next stroke:
        pointsOnLine = [];
        $timeout(setNextAttack, 3000);
      };

      $ionicGesture.on('dragstart', dragStart, canvasElement);
      $ionicGesture.on('drag', drag, canvasElement);
      $ionicGesture.on('release', dragEnd, canvasElement);

      $scope.game = {};
      $scope.game.start = function () {
        angular.element(document.getElementById('preGameScreen')).addClass('hidden');
        GameHelper.deactivateScrolling();
        ctx.drawImage (personImg, 0, 0, 377, 699, 300, 0, 234.22, 450);

        $scope.game.instruction = 'Bereitmachen...!';
        $timeout (function () {
          $scope.game.instruction = '... 3';
          $timeout (function () {
            $scope.game.instruction = '... 2';
            $timeout (function () {
              $scope.game.instruction = '... 1';
              $timeout (function () {
                setNextAttack();
                //angular.element (document.getElementById('instruction-text')).addClass('cut-instruction');
              }, 1000);
            }, 1000);
          }, 1000);
        }, 3000);
      }

      function setNextAttack () {

        ctx.clearRect (0, 0, canvas.width, canvas.height);
        ctx.drawImage (personImg, 0, 0, 377, 699, 300, 0, 234.22, 450);

        var rand = Math.floor (Math.random() * 4);

        if (rand === 0) {
          oberhauLinks();
        }
        else if (rand === 1) {
          oberhauRechts();
        }
        else if (rand === 2) {
          unterhauRechts();
        }
        else if (rand === 3) {
          unterhauLinks();
        }
        canDraw = true;
      }

      var isOberhau = false;
      var isRechts = false;

      // create paths:
      function oberhauRechts () {

        isOberhau = true;
        isRechts = false;

        $scope.game.instruction = 'Zeichne Oberhau Rechts!';
        $scope.$apply();
        ctx.beginPath();
        ctx.moveTo(480, 30);
        ctx.lineTo(200, 350);
        ctx.lineTo(250, 370);
        ctx.lineTo(500, 30);
        ctx.closePath();
        //ctx.fill();
        //console.log (ctx.isPointInPath (335, 35));
      }
      // create paths:
      function oberhauLinks () {

        isOberhau = true;
        isRechts = true;

        $scope.game.instruction = 'Zeichne Oberhau Links!';
        $scope.$apply();
        ctx.beginPath();
        ctx.moveTo(330, 30);
        ctx.lineTo(650, 350);
        ctx.lineTo(550, 370);
        ctx.lineTo(300, 30);
        ctx.closePath();
        //ctx.fill();
        //console.log (ctx.isPointInPath (335, 35));
      }
      // create paths:
      function unterhauRechts () {

        isOberhau = false;
        isRechts = false;

        $scope.game.instruction = 'Zeichne Unterhau Rechts!';
        $scope.$apply();
        ctx.beginPath();
        ctx.moveTo(330, 30);
        ctx.lineTo(650, 350);
        ctx.lineTo(550, 370);
        ctx.lineTo(300, 30);
        ctx.closePath();
        //ctx.fill();
        //console.log (ctx.isPointInPath (335, 35));
      }
      // create paths:
      function unterhauLinks () {

        isOberhau = false;
        isRechts = true;

        $scope.game.instruction = 'Zeichne Unterhau Links!';
        $scope.$apply();
        ctx.beginPath();
        ctx.moveTo(480, 30);
        ctx.lineTo(200, 350);
        ctx.lineTo(250, 370);
        ctx.lineTo(500, 30);
        ctx.closePath();
       // ctx.fill();
        //console.log (ctx.isPointInPath (335, 35));
      }

      // checks how many points are in the last drawn path and return the result in percent
      function checkLine (lineArray) {
        var inPath = 0;
        var i = lineArray.length;
        while (i--) {
          if (ctx.isPointInPath(lineArray[i][0],lineArray[i][1])) {
            inPath++;
          }
        }
        return (inPath / lineArray.length);
      }

      /*
        PAGE SLIDER
      */

      // get the page slidebox:
      var pageSlider = GameHelper.getPageSlider();
      $ionicGesture.on('touch', GameHelper.preventSlide, $element);

      

      $scope.$on('$destroy', function() {
        $element.remove();
      });

    }, 
    template: '<div class="game-container cutting-up">'+
                '<div class="row">' +
                  '<div class="col col-67">' +
                    '<canvas width="800px" height="450px" id="gameCanvas"></canvas>' +
                    '<img class="hidden" src="../img/lessons/06/schnittlinien-figur.png">' +
                  '</div>' +
                  '<div class="col">' +
                    '<h4>Schneide die Puppe mit der angezeigten Technik!</h4>' +
                    '<span id="instruction-text" class="">{{game.instruction}}</span>' +
                  '</div>' +
                '</div>' +
              '</div>'
  };
}]);