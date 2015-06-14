angular.module('starter.directives')

.directive('multipleChoice', ['$document', function($document) {

  var rightChoice = 0;
  var callback = function () {};

  function selectChoice (selectedNumber) {
    console.log (selectedNumber);
    if (selectedNumber == rightChoice) {
      console.log ('You made the right choice.');
      callback();
    }
  }

  return {
    restrict: 'E',
    scope: {
      callback : '&callback'
    },
    replace: true,
    link: function($scope, $element, $attributes) {

      var c = $attributes.choices.split (', ');
      rightChoice = $attributes.rightChoice;

      if ($attributes.callback) callback = $scope.callback;
      //scope = $scope;
      console.log (callback);

      var l = c.length;

      var lpoints = '';

      while (l--) {
        (function (i) {
          c[i] = '<label class="item item-radio choice"><div class="item-content">'+ 
                  c[i] +
                  '</div></label>';
          var e = angular.element (c[i]);
          e.on ('click', function () {selectChoice(i);});
          $element.append (e);
        })(l)
        
      }

      /*var keyUp = function(e) {
        if (e.which == 27) {
          $scope.cancel();
          $scope.$apply();
        }
      };

      var backdropClick = function(e) {
        if (e.target == $element[0]) {
          $scope.cancel();
          $scope.$apply();
        }
      };
      $scope.$on('$destroy', function() {
        $element.remove();
        $document.unbind('keyup', keyUp);
      });

      $document.bind('keyup', keyUp);
      $element.bind('click', backdropClick);*/
    },
    template: '<div class="multiple-choice-container">' +
                '<ul class="multiple-choice-list list">' +
                
                '</ul>' +
              '</div>'
  };
}]);