angular.module('starter.controllers')

.controller('StartCtrl', 
['$scope', '$state', 'Profile', 'Data',
function($scope, $state, Profile, Data) {

	var onVideoEnd = function () {
		$state.go ('help');
	};

	$scope.$on('$ionicView.loaded', function (e) {
		user = Profile.loadLastUser ();
		if (!user) {
			var vid = document.getElementById('trailer');
			vid.play();
			vid.addEventListener('ended', onVideoEnd, false);
		} 
		else {
			$state.go('menu.dashboard');
		}
	});

}]);