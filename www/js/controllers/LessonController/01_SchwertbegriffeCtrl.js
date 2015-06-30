angular.module('starter.controllers')

.controller('01_SchwertbegriffeCtrl', 
['$scope', 'Data', '$ionicSlideBoxDelegate', 'Campaign', '$timeout',
function($scope, Data, $ionicSlideBoxDelegate, Campaign, $timeout) {

	$scope.vars = {}; 
	$scope.game = {};

	/*
		Slidebox-related functions
	*/
	var slideBox = $ionicSlideBoxDelegate.$getByHandle('pageSlidebox');
	$scope.pagerClick = function(index) {
		$scope.gotoPage(index);
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

		Campaign.start (1, $scope);
	});
}]);