angular.module('starter.controllers')

.controller('06_AngriffeCtrl', 
['$scope', 'Data', '$ionicSlideBoxDelegate', 'Campaign', '$stateParams',
function($scope, Data, $ionicSlideBoxDelegate, Campaign, $stateParams) {

	$scope.vars = {
		slideEnabled : true
	};

	// check if the lesson was called as a part of the campaign:
	var isInCampaign = $stateParams.campaign;
	$scope.isInCampaign = isInCampaign;

	var slideBox = null;
	var visitedPages = [];
	var pCount = 0;

	/*
		Startup-functions:
	*/
	$scope.$on('$ionicView.enter', function () {

		slideBox = $ionicSlideBoxDelegate.$getByHandle('pageSlidebox');
		pCount = slideBox.slidesCount();
		for (var i = 0; i < pCount; i++) {
			visitedPages[i] = false;
		};
		// do reduction for first page:
		pCount--;
		visitedPages[0] = true;

		$scope.Lesson = Campaign;
		$scope.data = Data;

		if (isInCampaign) {
			Data.exitIntroButtonVisible = true;
			Campaign.start (6, $scope);
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
	$scope.slideHasChanged = function (index) {
		if (visitedPages[index] === false) {
			visitedPages[index] = true;
			pCount--;
		}
		if (pCount === 0) {
			Campaign.addEnd();
		}
		console.log (index + ', ' + pCount);
		console.log (visitedPages);
	};
}]);