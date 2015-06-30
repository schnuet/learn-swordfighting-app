angular.module('starter.directives')

.directive('glossar', ['$ionicPopover', 'Data',
function($ionicPopover, Data) {


  return {
    restrict: 'A',
    scope: {
      
    },
    replace: false,
    link: function($scope, $element, $attributes) {

      var popover = null;

      var entryName = $attributes.glossar;

      var tpl = '';

      $element.on ('click', function ($event) {

        tpl = '<ion-popover-view>'+
                '<ion-header-bar>' +
                  '<h1 class="title">'+ Data.glossar[entryName].title +'</h1>' +  
                '</ion-header-bar>'+ 
                '<ion-content class="glossartext"> ' + Data.glossar[entryName].description + ' </ion-content>'+
              '</ion-popover-view>';

        // .fromTemplateUrl() method
        popover = $ionicPopover.fromTemplate(tpl, {
          scope: $scope
        });
        popover.show($event);
      });

      $element.addClass ('clickable glossarwort');


      $scope.$on('$destroy', function() {
        if (popover !== null) popover.remove();
        $element.remove();
      });

    }
  };
}]);