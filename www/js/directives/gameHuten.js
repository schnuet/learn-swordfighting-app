angular.module('starter.directives')

.directive('gameHuten', ['$ionicGesture', '$ionicSlideBoxDelegate', 'Campaign', 'GameHelper', 'Feedback', '$timeout',
function($ionicGesture, $ionicSlideBoxDelegate, Campaign, GameHelper, Feedback, $timeout) {

	return {
		restrict: 'E',
		replace: false,

		link: function($scope, $element, $attributes) {

			$scope.game = {};

			var beinParts = null;
			var armParts = null;

			var partArm = '';
			var partBein = '';

			var finishedButton = null;

			var moeglicheHuten = ['Alber', 'Pflug', 'Ochs', 'Vom Tag'];
			var requiredHute = '';

			$scope.game.nextHute = '';
			$scope.game.buttonText = 'Wähle Hut...';


			var selectPart = function (e, partClass) {
				var otherParts = null;
				// if target is an arm part:
				if (e.target.className.indexOf('arm') !== -1) {
					otherParts = armParts;
					partArm = e.target.id.substr(4);
				}
				// leg part:
				//else {
				//	otherParts = beinParts;
				//	partBein = e.target.id.substr(5);
				//}

				// do the selection:
				for (var i = 3; i >= 0; i--) {
					if (otherParts[i] === e.target) {
						angular.element(otherParts[i]).addClass('selected');
					}
					else angular.element(otherParts[i]).removeClass('selected');
				};

				// enable button if two parts selected:
				if (partArm !== '') { 				// && partBein !== '') {
					finishedButton[0].disabled = false;
					$scope.$apply(function () {
						$scope.game.buttonText = 'Das ist die Hut!';
					});
				}
			};

			var checkParts = function () {
				if (partArm === requiredHute) { // partArm === partBein &&
					console.log ('The parts fit.');
					Feedback.congratulation('Richtig', 'Gut gemacht! ' + $scope.game.nextHute + ' erkannt.')
					.then (function () {
						deselectAllParts();
						// Überprüfe, ob es noch Huten gibt:
						if (getNextHute() === false) {
							// Spiel gewonnen!
							Campaign.addEnd();
							$scope.game.nextHute = 'Spiel bestanden!';
							finishedButton.addClass('hidden');
							for (var i = 3; i >= 0; i--) {
								angular.element(armParts[i]).addClass('resolved');
								angular.element(beinParts[i]).addClass('resolved');
							};
							Feedback.congratulation('Herzlichen Glückwunsch!', 'Die Huten scheinst du drauf zu haben! Das Spiel ist bestanden.')
							.then(function () {
								// restart the sliding of the page slider
								GameHelper.activateScrolling();
								$scope.vars.slideEnabled = true;
							});
						}
					});
				}
				// else if (partArm === partBein) {
				//	Feedback.sorry('Hmm...', 'Die Teile passen zusammen, sind aber eine andere Hut! ' + $scope.game.nextHute + ' sieht anders aus.')
				//	.then (function () {
				//		deselectAllParts();
				//	});
				//}
				else {
					console.log ('The parts don\'t fit.');
					Feedback.sorry('Leider Falsch', 'Die Teile passen nicht so ganz! ' + $scope.game.nextHute + ' sieht anders aus. Versuchs noch mal.')
					.then (function () {
						console.log (requiredHute);
						deselectAllParts();
					});
				}
			};

			var deselectAllParts = function () {
				// do the selection:
				for (var i = 3; i >= 0; i--) {
					angular.element(armParts[i]).removeClass('selected');
					angular.element(beinParts[i]).removeClass('selected');
				};
				partArm = '';
				partBein = '';
				$scope.game.buttonText = 'Wähle Teile...';
				finishedButton[0].disabled = true;
			}

			var getNextHute = function () {
				if (moeglicheHuten.length === 0) return false;
				// get one random part of possible Huten, delete it from the others.
				$scope.game.nextHute = moeglicheHuten.splice(Math.floor(Math.random() * (moeglicheHuten.length)), 1)[0];
				requiredHute = $scope.game.nextHute.toLowerCase().replace(' ', '_');
			};

			$scope.game.start = function () {
				// hide the instruction screen
				document.getElementById('preGameScreen').className = 'hidden';

				// stop the sliding of the page slider
				GameHelper.deactivateScrolling();
				$scope.vars.slideEnabled = false;

				armParts = $element[0].getElementsByClassName('selectable arm');
				beinParts = $element[0].getElementsByClassName('selectable bein');

				finishedButton = angular.element(document.getElementById('huteFinishedButton'));

				finishedButton.on('click', checkParts);
				for (var i = 3; i >= 0; i--) {
					angular.element(armParts[i]).on('click', selectPart);
					angular.element(beinParts[i]).on('click', selectPart);
				};
				getNextHute();
			};

			/*
				prevent dragging of page slider:
			*/
			var pageSlider = GameHelper.getPageSlider();
			$ionicGesture.on('touch', GameHelper.preventSlide, $element);


			$scope.$on('$destroy', function() {
				$element.remove();
			});

		}
	};
}]);
