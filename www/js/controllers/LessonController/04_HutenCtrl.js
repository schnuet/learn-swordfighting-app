angular.module('starter.controllers')

.controller('04_HutenCtrl', 
['$scope', 'Data', '$ionicSlideBoxDelegate', 'Campaign', '$stateParams',
function($scope, Data, $ionicSlideBoxDelegate, Campaign, $stateParams) {
	
	$scope.vars = {
		slideEnabled : true
	};
	
	// check if the lesson was called as a part of the campaign:
	var isInCampaign = $stateParams.campaign;
	$scope.isInCampaign = isInCampaign;

	var slideBox = null;

	/*
		Startup-functions:
	*/
	$scope.$on('$ionicView.enter', function () {

		slideBox = $ionicSlideBoxDelegate.$getByHandle('pageSlidebox');

		$scope.Lesson = Campaign;
		$scope.data = Data;

		if (isInCampaign) {
			Data.exitIntroButtonVisible = true;
			Campaign.start (4, $scope);
		}
	});
	$scope.$on('$ionicView.beforeLeave', function () {
		Data.exitIntroButtonVisible = false;
	});

	/*
		Slidebox-related functions
	*/
	$scope.pagerClick = function(index) {
		if ($scope.vars.slideEnabled) {
			$scope.gotoPage(index);
		}
	};
	$scope.gotoPage = function (index) {
		slideBox.slide (index);
	};
}]);