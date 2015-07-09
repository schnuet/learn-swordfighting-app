angular.module('starter.directives')

.directive('addControls', ['$ionicSlideBoxDelegate', 
function ($ionicSlideBoxDelegate) {
  return {
    restrict: 'A',
    link: function ($scope, $element) {

      var buttonBack = document.createElement('button');
      buttonBack.className = 'button button-icon imagebox-back-button icon ion-chevron-left';
      buttonBack.disabled = true;

      var buttonNext = document.createElement('button');
      buttonNext.className = 'button button-icon imagebox-next-button icon ion-chevron-right';
      
      $element.append(buttonBack);
      $element.append(buttonNext);

      var sb = null;

      angular.element(buttonBack).on('click', function() {
        sb.previous();
        buttonNext.disabled = false;
        if (sb.currentIndex() === 0) {
          buttonBack.disabled = true;
        }
      });
      angular.element(buttonNext).on('click', function (){
        sb.next();
        buttonBack.disabled = false;
        if (sb.currentIndex() === (sb.count()-1)) {
          buttonNext.disabled = true;
        }
      });

      sb = $ionicSlideBoxDelegate.$getByHandle($element.attr('delegate-handle'));
      sb.enableSlide(false);

      $scope.$on('destroy', function () {
        $element.remove();
      });
    }
  };
}]);