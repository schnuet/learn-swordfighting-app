angular.module('starter.controllers')

.controller('ProfileCtrl', 
['$scope', '$ionicHistory', '$state', 'Profile', 'Data', '$ionicPopup', '$timeout',
function($scope, $ionicHistory, $state, Profile, Data, $ionicPopup, $timeout) {

	/*$ionicHistory.nextViewOptions({
			disableAnimate: true,
			disableBack: true, 
			expire: 300
	});*/
	
	$scope.onChangeName = function(e) {
		$scope.Data.user.name;
	};

	$scope.showProfileOptions = function () {
		var myPopup = $ionicPopup.show({
			template: 
				'<button class="button button-icon ion-close" id="profile-edit-close-button"></button>'+
				'<button class="button button-block button-royal" id="change-profile-button">Profil wechseln</button>'+
				'<button class="button button-block button-dark" id="delete-profile-button">Profil löschen</button>'

			,
			cssClass: 'profile_edit',
			title: 'Profil bearbeiten',
			subTitle: '',
			buttons: [
			]
		});
		$timeout (function () {
			angular.element(document.getElementById('profile-edit-close-button')).on('click', function() {
				myPopup.close();
			});
			angular.element(document.getElementById('change-profile-button')).on('click', function() {
				$scope.gotoState('profileCreation');
				myPopup.close();
			});
			angular.element(document.getElementById('delete-profile-button')).on('click', function() {
				myPopup.close();
				$timeout (function() {
					var myPopup2 = $ionicPopup.confirm({
						template: 'Willst du das Profil wirklich löschen?',
						cssClass: 'profile_delete',
						title: 'Profil Löschen'
					})
					.then(function(yes) {
						if(yes) {
							$ionicHistory.nextViewOptions({
								disableAnimate: false,
								disableBack: true, 
								expire: 300
							});
							Profile.remove();
							$scope.gotoState('profileCreation');
						} else {
							// Nothing happens.
						}
					});
				}, 200);
			});
		}, 200);
	};

	$scope.$on('$ionicView.enter', function () {
		console.log ($scope.Data);
	});

	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});
}])