angular.module('starter.controllers')

.controller('06_DasScharfeSchwertCtrl', 
['$scope', 'Data', '$ionicSlideBoxDelegate', 'Campaign',
function($scope, Data, $ionicSlideBoxDelegate, Campaign) {
	$scope.data = Data;

	$scope.Lesson = Campaign;

	Campaign.start (6, $scope);

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