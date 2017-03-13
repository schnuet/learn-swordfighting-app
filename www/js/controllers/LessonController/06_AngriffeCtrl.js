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
	var lesson_video = [];
	var video_play_button = [];

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

		// get videos and play buttons
		lesson_video[0] = document.getElementById('lesson_video_0');
		lesson_video[1] = document.getElementById('lesson_video_1');
		lesson_video[2] = document.getElementById('lesson_video_2');

		video_play_button[0] = document.getElementById('play_button_0');
		video_play_button[1] = document.getElementById('play_button_1');
		video_play_button[2] = document.getElementById('play_button_2');

		prepareVideos(lesson_video);
	});
	$scope.$on('$ionicView.beforeLeave', function () {
		Data.exitIntroButtonVisible = false;
	});

	/*
		Video functions
	*/
	$scope.playLessonVideo = function ($event, index) {
		$event.target.classList.add('hidden');
		lesson_video[index].play();
	};

	function showVideoPlayButton (id) {
		video_play_button[id].classList.remove('hidden');
	}
	function hideVideoPlayButton (id) {
		video_play_button[id].classList.add('hidden');
	}

	function prepareVideos (vidArray) {
		for (var i = 0; i < vidArray.length; i++) {
			let id = i;
			vidArray[i].addEventListener('ended', showVideoPlayButton.bind(null, id));
			vidArray[i].addEventListener('pause', showVideoPlayButton.bind(null, id));
			vidArray[i].addEventListener('play', hideVideoPlayButton.bind(null, id));
		}
	}


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
