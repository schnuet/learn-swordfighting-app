angular.module('starter.controllers')

.controller('HelpCtrl', 
['$scope', '$state',
function($scope, $state) {
	$scope.slideHasChanged = function (index) {
		if (index === 6) {
			$state.go('profileCreation');
		}
	};

}]);