angular.module('starter.controllers')

.controller('04_HutenCtrl', 
['$scope', 'Data', '$ionicSlideBoxDelegate', 'Campaign',
function($scope, Data, $ionicSlideBoxDelegate, Campaign) {
	
	/*
		Startup-functions:
	*/
	$scope.$on('$ionicView.enter', function () {

		$scope.Lesson = Campaign;
		$scope.data = Data;

		Campaign.start (4, $scope);
	});

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
}]);