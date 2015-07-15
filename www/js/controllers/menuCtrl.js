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
	};
	
	$scope.gotoState = function (chosenState) {
		console.log ('going to: ' + chosenState);
		$state.go (chosenState);
	};
	$scope.gotoCampaignLesson = function (chosenLesson) {
		if (Data.outroModal.isShown()){
			Data.outroModal.hide().then(function () {
				Data.lessonData = Data.lessons[chosenLesson-1];
				Data.introModal.show().then(function() {
					$state.go('menu.campaign-lesson-' + chosenLesson);
				});
			});
		} 
		else {
			Data.lessonData = Data.lessons[chosenLesson-1];
			Data.introModal.show().then(function() {
				$state.go('menu.campaign-lesson-' + chosenLesson);
			});
		}
	};

	$scope.gotoNextLesson = function () {
		$state.go ('menu.campaign-lesson-'+ Data.user.levelprogress);
	}

	$scope.$on('$ionicView.enter', function (e) {
		if (e.targetScope.$id === $scope.$id) {
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
		}
	});

	$scope.$on('$ionicView.loaded', function (e) {

		if (e.targetScope.$id === $scope.$id) {
			// create the modals:
			Data.outroModal = $ionicModal.fromTemplateUrl('templates/lessons/outro.html', {
				scope: $scope,
				animation: 'slide-in-right-left',
				backdropClickToClose: false
			}).then(function(modal) {
				Data.outroModal = modal;
			});
			Data.introModal = $ionicModal.fromTemplateUrl('templates/lessons/intro.html', {
				scope: $scope,
				animation: 'slide-in-right-left',
				backdropClickToClose: false
			}).then(function(modal) {
				Data.introModal = modal;
			});
			console.log (e);
		}
	});

	$scope.closeIntro = function () {
		console.log ('trying to close intro');
		Data.exitIntroButtonVisible = false;
		Data.introModal.hide();
	};
	$scope.closeOutro = function () {
		Data.outroModal.hide();
	};

	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});
}])