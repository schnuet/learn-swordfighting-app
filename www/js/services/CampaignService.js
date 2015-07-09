angular.module('starter.services')

/*
	This is the CampaignService, filled with commonly used functions needed in different campaigns.
*/

.factory ('Campaign', 
['Data', '$ionicModal', '$ionicSlideBoxDelegate', 'Profile', 'Feedback',
function (Data, $ionicModal, $ionicSlideBoxDelegate, Profile, Feedback) {

	var scopes = [];

	var _self = {

		lessonnumber : 0,

		showInfoPopup : Feedback.info,

		/*
			Starting function - should be called at the beginning of every Lesson
		*/
		start : function (lNbr, $scope) {

			// save the scope for other functions 
			scopes.push ($scope);

			_self.lessonnumber = lNbr;
			Data.lessonnumber = lNbr;

			if (Data.lessonData != Data.lessons[lNbr-1]) Data.lessonData = Data.lessons[lNbr-1];

			// create the modals:
			/*$ionicModal.fromTemplateUrl('templates/lessons/'+ Data.lessonDirectories[lNbr] +'/intro.html', {
				scope: $scope,
				animation: 'slide-in-right-left',
				backdropClickToClose: false
			}).then(function(modal) {
				$scope.introModal = modal;
				modal.show();
			});
			$ionicModal.fromTemplateUrl('templates/lessons/'+ Data.lessonDirectories[lNbr] +'/outro.html', {
				scope: $scope,
				animation: 'slide-in-right-left',
				backdropClickToClose: false
			}).then(function(modal) {
				$scope.outroModal = modal;
			});*/

			// SHOW INTRO
			/*if (typeof Data.introModal.animation === 'string') {
				Data.introModal.show();
			}
			else {
				Data.introModal.then(function () {
					Data.introModal.show();
				});
			}*/
			

			// clean up the modals when we leave the page:
			$scope.$on('$destroy', function() {
				console.log ('destroyed scope!');
				//Data.introModal.hide();
				//Data.outroModal.hide();

				scopes[scopes.indexOf($scope)] = null;
			});

			/*$scope.closeIntro = function () {
				Data.introModal.close();
			};
			$scope.closeOutro = function () {
				Data.outroModal.close();
			};*/

			/*$scope.endLesson = function () {
				$scope.outroModal.show();
				_self.end();
			};*/
		},
		addEnd : function () {

			console.log ('END FUNCTION CALLED!');
			// only add the button if the scope was defined
			if (scopes.length === 0 || scopes[scopes.length-1] === null) {
				console.log ('No scope defined.');
				return;
			}
			var btn = angular.element(document.getElementById("endLessonButton"));        // Create a <button> element
			btn.removeClass('hidden');                  	// Append <button> to <body>
			
			// add a click handler to the button
			var nextLessonButtonClick = function () {
				btn.addClass('hidden');
				btn.off('click', nextLessonButtonClick);
				btn = null;
				_self.end ();
			};
			angular.element(btn).on('click', nextLessonButtonClick);

			scopes[scopes.length-1].$on('$destroy', function () {
				if (btn !== null) {
					btn.addClass('hidden');
					btn.off('click', nextLessonButtonClick);
					btn = null;
				} 
			});
		},
		end : function () {
			console.log ('End was called');
			if (Profile.data.levelprogress <= _self.lessonnumber) {
				Profile.data.levelprogress++;
				Profile.data.score += 200;
			}
			Profile.save();
			Data.outroModal.show();
		}
	};

	return _self;
}]);