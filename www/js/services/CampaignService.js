angular.module('starter.services')

/*
	This is the CampaignService, filled with commonly used functions needed in different campaigns.
*/

.factory ('Campaign', 
['Data', '$ionicModal', '$ionicSlideBoxDelegate', 'Profile', '$ionicPopup', '$timeout',
function (Data, $ionicModal, $ionicSlideBoxDelegate, Profile, $ionicPopup, $timeout) {

	var scope = null;

	var _self = {

		lessonnumber : 0,

		showInfoPopup : function (title, text, cssClass) {
			if (typeof cssClass === 'undefined') cssClass = '';
			// An elaborate, custom popup
			var myPopup = $ionicPopup.show({
				template: text,
				cssClass: 'infoPopup ' + cssClass,
				title: title,
				subTitle: '',
				scope: scope,
				buttons: [
				]
			});
			$timeout (function () {
				var el = document.getElementsByClassName('popup-container')[0];
				console.log (el);
				angular.element(el).on('click', function () { 
					myPopup.close(); 
				});
			}, 500);
		},

		/*
			Starting function - should be called at the beginning of every Lesson
		*/
		start : function (lNbr, $scope) {
			_self.lessonnumber = lNbr;
			$ionicModal.fromTemplateUrl('templates/lessons/'+ Data.lessonDirectories[lNbr] +'/intro.html', {
				scope: $scope,
				animation: 'slide-in-up',
				backdropClickToClose: false
			}).then(function(modal) {
				$scope.introModal = modal;
				modal.show();
			});

			$ionicModal.fromTemplateUrl('templates/lessons/'+ Data.lessonDirectories[lNbr] +'/outro.html', {
				scope: $scope,
				animation: 'slide-in-up',
				backdropClickToClose: false
			}).then(function(modal) {
				$scope.outroModal = modal;
			});

			//Cleanup the modal when we're done with it!
			$scope.$on('$destroy', function() {
				console.log ('destroyed scope!');
				$scope.introModal.remove();
				$scope.outroModal.remove();
			});

			$scope.closeIntro = function () {
				$scope.introModal.remove();
			};
			$scope.closeOutro = function () {
				$scope.outroModal.remove();
			};

			/*$scope.endLesson = function () {
				$scope.outroModal.show();
				_self.end();
			};*/

			scope = $scope;
		},
		end : function () {
			console.log ('End was called');
			if (Profile.data.levelprogress <= _self.lessonnumber) {
				Profile.data.levelprogress++;
				Profile.data.score += 200;
			}
			Profile.save();
			scope.outroModal.show();
			scope = null;
		}
	};

	return _self;
}]);