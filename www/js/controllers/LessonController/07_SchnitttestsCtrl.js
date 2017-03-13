angular.module('starter.controllers')

.controller('07_SchnitttestsCtrl',
['$scope', 'Data', '$ionicSlideBoxDelegate', 'Campaign', '$stateParams',
function($scope, Data, $ionicSlideBoxDelegate, Campaign, $stateParams) {

	$scope.vars = {
		slideEnabled : true
	};

	// check if the lesson was called as a part of the campaign:
	var isInCampaign = $stateParams.campaign;
	$scope.isInCampaign = isInCampaign;

	var slideBox = null;
	var lesson_video = [];
	var video_play_button = [];

	/*
		Startup-functions:
	*/
	$scope.$on('$ionicView.enter', function () {

		slideBox = $ionicSlideBoxDelegate.$getByHandle('pageSlidebox');

		$scope.Lesson = Campaign;
		$scope.data = Data;

		if (isInCampaign) {
			Data.exitIntroButtonVisible = true;
			Campaign.start (7, $scope);
		}

		// get videos and play buttons
		lesson_video[0] = document.getElementById('lesson_video_0');
		video_play_button[0] = document.getElementById('play_button_0');
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
}]);
