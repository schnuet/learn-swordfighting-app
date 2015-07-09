angular.module('starter.controllers')

.controller('03_BeinarbeitCtrl', 
['$scope', 'Data', '$ionicSlideBoxDelegate', 'Campaign', '$stateParams', 'GameHelper', 'Feedback',
function($scope, Data, $ionicSlideBoxDelegate, Campaign, $stateParams, GameHelper, Feedback) {

	$scope.vars = {
		slideEnabled : true
	};

	// check if the lesson was called as a part of the campaign:
	var isInCampaign = $stateParams.campaign;
	$scope.isInCampaign = isInCampaign;

	/*
		Startup-functions:
	*/
	$scope.$on('$ionicView.enter', function () {

		$scope.Lesson = Campaign;
		$scope.data = Data;

		if (isInCampaign) {
			Campaign.start (3, $scope);
		}
	});

	/*
		Game
	*/
	$scope.game = {};
	$scope.game.video = 0;
	var vid0 = null;
	var vid1 = null;

	/*currentVideo = null;

	var canVideoPlay = false;*/

	$scope.game.start = function () {
		GameHelper.deactivateScrolling();
		angular.element(document.getElementById('preGameScreen')).addClass('hidden');
		vid0 = document.getElementById('vid0');
		vid1 = document.getElementById('vid1');
		vid0.addEventListener ("ended", onVideoEnd, false);
		vid1.addEventListener ("ended", onVideoEnd, false);

		/*vid0.addEventListener ("onloadeddata", onCanPlayVideo, false);
		//vid1.addEventListener ("onloadeddata", onCanPlayVideo, false);
		vid0.src = './img/lessons/03/halberschritt.mp4';
		vid0.addEventListener ('error', function(e) {
			console.log (e);
		}, false);*/
	};
	var onCanPlayVideo = function () {
		console.log ('video ready');
		canVideoPlay = true;
		if (currentVideo !== null) {
			currentVideo.removeEventListener('onloadeddata', onCanPlayVideo);
			currentVideo.play();
			currentVideo = null;
		}
	};
	$scope.game.startVideo = function (videoNbr) {
		angular.element(document.getElementsByClassName('video-overlay')[videoNbr]).addClass('hidden');
		if (videoNbr === 0) {
			angular.element(vid0).removeClass('hidden');
			/*if (canVideoPlay){
				console.log ('video can play');*/
				vid0.play();
			/*	canVideoPlay = false;
			} 
			else {
				console.log ('video can\'t play');
				currentVideo = vid0;
			}		*/
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
				angular.element(document.getElementById('button-box')).addClass ('hidden');

				angular.element(document.getElementById('video-halberschritt')).addClass ('hidden');
				angular.element(document.getElementById('video-passierschritt')).removeClass ('hidden');
				$scope.game.video = 1;
				Feedback.congratulation ('Richtig!', 'Gut aufgepasst!');
			}
			// wrong
			else {
				Feedback.sorry('Sorry', 'Leider wäre es das andere gewesen. Wir starten die Übung noch mal - pass genau auf!', null).then(
				function () {
					restartGame();
				});
			}
		}
		else if ($scope.game.video === 1) {
			// right:
			if (nbr === 1) {
				GameHelper.activateScrolling();
				Campaign.addEnd();
				Feedback.congratulation ('Richtig!', 'Gut aufgepasst. Damit hast du diese Lektion bestanden!');
			}
			// wrong
			else {
				Feedback.sorry('Sorry', 'Leider wäre es das andere gewesen. Wir starten die Übung noch mal - pass genau auf!', null).then(
				function () {
					restartGame();
				});
				
			}
		}
	};

	var restartGame = function () {
		$scope.game.video = 0;
		angular.element(document.getElementById('button-box')).addClass ('hidden');

		angular.element(document.getElementById('video-halberschritt')).removeClass ('hidden');
		angular.element(document.getElementById('video-passierschritt')).addClass ('hidden');

		angular.element(document.getElementsByClassName('video-overlay')[0]).removeClass('hidden');
		angular.element(document.getElementsByClassName('video-overlay')[1]).removeClass('hidden');
		angular.element(vid0).addClass('hidden');
		angular.element(vid1).addClass('hidden');
	}

	var onVideoEnd = function () {
		angular.element(document.getElementById('button-box')).removeClass ('hidden');
		angular.element(vid0).addClass ('hidden');
		angular.element(vid1).addClass ('hidden');
	};

	/*
		Slidebox-related functions
	*/
	var slideBox = GameHelper.getPageSlider();
	$scope.pagerClick = function(index) {
		if ($scope.vars.slideEnabled) {
			$scope.gotoPage(index);
		}
	};
	$scope.gotoPage = function (index) {
		slideBox.slide (index);
	};
}]);