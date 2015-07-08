angular.module('starter.directives')

.directive('quelle', ['$ionicPopover',
function ($ionicPopover) {
  return {
    restrict: 'E',
    link : function ($scope, $element) {
      var popover = null;

      var content = $element[0].innerHTML;
      console.log (content);

      var tpl = '';

      var button = document.createElement('button');
      button.className = 'button button-clear quelle-button';
      var button = angular.element (button);

      button.on ('click', function ($event) {

        tpl = '<ion-popover-view class="quelle">'+
                '<ion-header-bar>' +
                  '<h1 class="title">Quelle</h1>' +  
                '</ion-header-bar>'+ 
                '<ion-content class="quellentext" scroll="false"> ' + content + ' </ion-content>'+
              '</ion-popover-view>';

        // .fromTemplateUrl() method
        popover = $ionicPopover.fromTemplate(tpl, {
          scope: $scope
        });
        popover.show($event);
      });

      $element.replaceWith (button);


      $scope.$on('$destroy', function() {
        if (popover !== null) popover.remove();
        $element.remove();
      });
    }
  };
}]);