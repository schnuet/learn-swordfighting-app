angular.module('starter.services')

/*
	This is the CampaignService, filled with commonly used functions needed in different campaigns.
*/

.factory ('Campaign', 
['Data', '$ionicModal', '$ionicSlideBoxDelegate', 'Profile',
function (Data, $ionicModal, $ionicSlideBoxDelegate, Profile) {

	var s = null;

	var _self = {

		lessonnumber : 0,
		/*
			Starting function - should be called at the beginning of every Lesson
		*/
		start : function (lNbr, $scope) {
			_self.lessonnumber = lNbr;
			$ionicModal.fromTemplateUrl('/templates/lessons/'+ Data.lessonDirectories[lNbr] +'/intro.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(modal) {
				$scope.introModal = modal;
				modal.show();
			});

			$ionicModal.fromTemplateUrl('/templates/lessons/'+ Data.lessonDirectories[lNbr] +'/outro.html', {
				scope: $scope,
				animation: 'slide-in-up'
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

			s = $scope;
		},
		end : function () {
			console.log ('End was called');
			if (Profile.data.levelprogress <= _self.lessonnumber) {
				Profile.data.levelprogress++;
				Profile.data.score += 200;
			}
			Profile.save();
			s.outroModal.show();
			s = null;
		}
	};

	return _self;
}]);