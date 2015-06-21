angular.module('starter.controllers')

.controller('CampaignCtrl', 
['$scope', 'Data', '$stateParams', '$ionicSlideBoxDelegate', 'Campaign',
function($scope, Data, $stateParams, $ionicSlideBoxDelegate, Campaign) {
	$scope.data = Data;

	$scope.Lesson = Campaign;

	var lNbr = $stateParams.lessonnumber;
	Campaign.start (lNbr, $scope);

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