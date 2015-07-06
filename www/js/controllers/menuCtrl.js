angular.module('starter.controllers')

.controller('MenuCtrl', 
['$scope', '$ionicModal', '$ionicHistory', '$state', 'Profile', 'Data',
function($scope, $ionicModal, $ionicHistory, $state, Profile, Data) {

	var user = null;
	var menuModal = null;
	
	$ionicModal.fromTemplateUrl('templates/overlays/menu.html', {
		scope: $scope,
		animation: 'slide-in-down'
	}).then(function(modal) {
		$scope.modal = modal;
	});
	
	$scope.openMenu = function() {
		console.log ('menu opened');
	    $scope.modal.show();
	    menuModal = document.getElementsByClassName('modal slide-in-down')[0];
	};
	$scope.closeMenu = function() {
		$scope.modal.hide();

		$ionicHistory.nextViewOptions({
			disableAnimate: true,
			disableBack: true, 
			expire: 300
		});
	};

	$scope.dragMenu = function (e) {
		angular.element(menuModal).addClass('dragged');
		menuModal.style[ionic.CSS.TRANSFORM] = 'translate3d(0px, '+e.gesture.deltaY+'px, 0px)';
		if (e.gesture.distance > 400) {
			$scope.closeMenu();
			$scope.endDragMenu();
		}
	}
	$scope.endDragMenu = function (e) {
		console.log ('menu was dragged.');
		angular.element(menuModal).removeClass('dragged');
		menuModal.style[ionic.CSS.TRANSFORM] = '';
	}
	
	$scope.gotoState = function (chosenState) {
		console.log ('going to: ' + chosenState);
		$state.go (chosenState);
	}

	$scope.gotoNextLesson = function () {
		$state.go ('menu.campaign-lesson-'+ Data.user.levelprogress);
	}

	$scope.$on('$ionicView.enter', function () {
		user = Profile.loadLastUser ();
		if (!user) {
			$state.go ('profileCreation');
			return;
		} 
		else {
			Data.user = Profile.data;
			$scope.Data = Data;
			console.log (user);
		}
	});

	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});
}])