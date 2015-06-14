angular.module('starter.controllers')

.controller('CampaignCtrl', 
['$scope', 'Data', '$stateParams', '$ionicModal', '$ionicSlideBoxDelegate', 'Profile',
function($scope, Data, $stateParams, $ionicModal, $ionicSlideBoxDelegate, Profile) {
	$scope.data = Data;

	var slideBox = $ionicSlideBoxDelegate.$getByHandle('pageSlidebox');

	var lNbr = $stateParams.lessonnumber;

	$ionicModal.fromTemplateUrl('/templates/lessons/'+ Data.lessonDirectories[lNbr] +'/intro.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.intro = modal;
		$scope.showIntro();
	});
	$ionicModal.fromTemplateUrl('/templates/lessons/'+ Data.lessonDirectories[lNbr] +'/outro.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.outro = modal;
	});
	
	$scope.showIntro = function() {
	    $scope.intro.show();
	};
	$scope.closeIntro = function() {
		$scope.intro.hide();
	};
	$scope.endLesson = function() {
		if (Profile.data.levelprogress <= lNbr) {
			Profile.data.levelprogress++;
			Profile.data.score += 200;
		}
		Profile.save();
	    $scope.outro.show();
	};
	$scope.closeOutro = function() {
		$scope.outro.hide();
	};

	$scope.pagerClick = function(index) {
		$scope.gotoPage(index);
	};

	$scope.gotoPage = function (index) {
		slideBox.slide (index);
	};
	
	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.intro.remove();
		$scope.outro.remove();
	});
}]);