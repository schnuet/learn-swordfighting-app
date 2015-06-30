angular.module('starter.controllers')

.controller('03_BeinarbeitCtrl', 
['$scope', 'Data', '$ionicSlideBoxDelegate', 'Campaign',
function($scope, Data, $ionicSlideBoxDelegate, Campaign) {

	/*
		Startup-functions:
	*/
	$scope.$on('$ionicView.enter', function () {

		$scope.Lesson = Campaign;
		$scope.data = Data;

		Campaign.start (3, $scope);
	});

	/*
		Game
	*/
	$scope.game = {};
	$scope.game.video = 0;
	var vid0 = null;
	var vid1 = null;
	$scope.game.start = function () {
		angular.element(document.getElementsByClassName('game-container')[0]).removeClass('hidden');
		angular.element(document.getElementById('gameStartButton')).addClass('hidden');
		vid0 = document.getElementById('vid0');
		vid1 = document.getElementById('vid1');
		vid0.addEventListener ("ended", onVideoEnd, false);
		vid1.addEventListener ("ended", onVideoEnd, false);
	};
	$scope.game.startVideo = function (videoNbr) {
		angular.element(document.getElementsByClassName('video-overlay')[videoNbr]).addClass('hidden');
		if (videoNbr === 0) {
			angular.element(vid0).removeClass('hidden');
			vid0.play();
		}
		else if (videoNbr === 1) {
			angular.element(vid1).removeClass('hidden');
			vid1.play();
		}
	};
	$scope.game.choose = function (nbr) {
		if ($scope.game.video === 0) {
			// right:
			if (nbr === 1) {
				angular.element(document.getElementById('video-halberschritt')).addClass ('hidden');
				angular.element(document.getElementById('video-passierschritt')).removeClass ('hidden');
				$scope.game.video = 1;
			}
			// wrong
			else {

			}
		}
		else if ($scope.game.video === 1) {
			// right:
			if (nbr === 1) {
				Campaign.end();
			}
			// wrong
			else {

			}
		}
	};

	var onVideoEnd = function () {
		angular.element(document.getElementById('button-box')).removeClass ('hidden');
		angular.element(vid0).addClass ('hidden');
		angular.element(vid1).addClass ('hidden');
	};

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