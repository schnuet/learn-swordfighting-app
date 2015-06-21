angular.module('starter.controllers')

.controller('03_HaltungCtrl', 
['$scope', 'Data', '$ionicSlideBoxDelegate', 'Campaign',
function($scope, Data, $ionicSlideBoxDelegate, Campaign) {
	$scope.data = Data;

	$scope.Lesson = Campaign;

	Campaign.start (3, $scope);

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