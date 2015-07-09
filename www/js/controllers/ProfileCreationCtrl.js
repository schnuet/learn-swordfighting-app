angular.module('starter.controllers')

.controller('ProfileCreationCtrl', 
['$scope', 'Data', 'Profile', '$state',
function($scope, Data, Profile, $state) {

	$scope.data = {};
	$scope.data.username = '';

	$scope.data.userList = Profile.getListOfUsers();

	$scope.createChar = function () {
		console.log ($scope.data.username);
		if ($scope.data.username.length === 0) return;
		Data.user = Profile.createNew ($scope.data.username);
		$state.go ('menu.dashboard');
	};

	$scope.selectChar = function (character) {
		Data.user = Profile.getUser(character);
		$state.go ('menu.dashboard');
	};

}]);