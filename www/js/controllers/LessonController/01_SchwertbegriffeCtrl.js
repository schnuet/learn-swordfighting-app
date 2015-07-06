angular.module('starter.controllers')

.controller('01_SchwertbegriffeCtrl', 
['$scope', 'Data', '$ionicSlideBoxDelegate', 'Campaign', '$timeout', '$stateParams',
function($scope, Data, $ionicSlideBoxDelegate, Campaign, $timeout, $stateParams) {

	$scope.vars = {
		slideEnabled : true
	};
	$scope.game = {};

	// check if the lesson was called as a part of the campaign:
	var isInCampaign = $stateParams.campaign;
	$scope.isInCampaign = isInCampaign;

	/*
		Slidebox-related functions
	*/
	var slideBox = $ionicSlideBoxDelegate.$getByHandle('pageSlidebox');
	$scope.pagerClick = function(index) {
		if ($scope.vars.slideEnabled) {
			$scope.gotoPage(index);
		}
	};
	$scope.gotoPage = function (index) {
		slideBox.slide (index);
	};

	/*
		Startup-functions:
	*/
	$scope.$on('$ionicView.enter', function () {

		$scope.Lesson = Campaign;
		$scope.data = Data;

		if (isInCampaign) {
			Campaign.start (1, $scope);
		}
	});
}]);