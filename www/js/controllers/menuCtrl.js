angular.module('starter.controllers')

.controller('MenuCtrl', 
['$scope', '$ionicModal', '$ionicHistory', '$state', 'Profile', 'Data',
function($scope, $ionicModal, $ionicHistory, $state, Profile, Data) {

	var user = Profile.loadLastUser ();
	if (!user) {
		$state.go ('profileCreation');
		return;
	} 
	else {
		Data.user = Profile.data;
		$scope.Data = Data;
		console.log (user);
	}
	

	$ionicModal.fromTemplateUrl('/templates/overlays/menu.html', {
		scope: $scope,
		animation: 'slide-in-down'
	}).then(function(modal) {
		$scope.modal = modal;
	});
	
	$scope.openMenu = function() {
		console.log ('menu opened');
	    $scope.modal.show();
	};
	$scope.closeMenu = function() {
		$scope.modal.hide();

		$ionicHistory.nextViewOptions({
			disableAnimate: true,
			disableBack: true, 
			expire: 300
		});
	};
	
	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});

	$scope.gotoState = function (chosenState) {
		console.log ('going to: ' + chosenState);
		$state.go (chosenState);
	}

	$scope.gotoNextLesson = function () {
		$state.go ('menu.campaign-lesson-'+ Data.user.levelprogress);
	}
}])