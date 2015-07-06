angular.module('starter.directives')

.directive('gameSwordParts', 
['$ionicGesture', '$ionicSlideBoxDelegate', 'DragNDropHelper', '$timeout', 'Campaign', 'Feedback', 'GameHelper',
function($ionicGesture, $ionicSlideBoxDelegate, DragNDropHelper, $timeout, Campaign, Feedback, GameHelper) {

	
	return {
		restrict: 'E',
		replace: false,
		link: function($scope, $element, $attributes) {

			var begriffeToDrop = 8;

			var watches = DragNDropHelper.watchElement ($element);

			$scope.vars.gameText = '<p>Baue das Schwert nach dem Text zusammmen!</p>';

			var droppedIt = function (e, obj) {
				if (obj.id === 'knauf') {
					$scope.game.addText('dem Griff, ...', '', '<br>');
					$scope.game.activateTarget ('griff');
				}
				else if (obj.id === 'griff') {
					$scope.game.addText('und der Parierstange.', '', '<br>');
					$scope.game.activateTarget ('parierstange');
				}
				else if (obj.id === 'parierstange') {
					$scope.game.addText('Das zweite Stück ist die Klinge. Sie ist in die Bereiche Stärke, ...', '', '<br>');
					$scope.game.activateTarget ('staerke');
				}
				else if (obj.id === 'staerke') {
					$scope.game.addText('Schwäche, ...', '', '<br>');
					$scope.game.activateTarget ('schwaeche');
				}
				else if (obj.id === 'schwaeche') {
					$scope.game.addText('und Ort eingeteilt.', '', '<br>');
					$scope.game.activateTarget ('ort');
				}
				else if (obj.id === 'ort') {

					// remove text:
					$scope.vars.gameText = '';
					var delay = $scope.game.addText ('Alles klar! Mal sehen, wie viel hängen geblieben ist.', '</p><p>', '<br>');
					$scope.game.addText ('Ordne die Begriffe richtig zu!', '', '</p>', delay);

					// activate texts targets
					$scope.game.activateTarget ('begriff-knauf');
					$scope.game.activateTarget ('begriff-griff');
					$scope.game.activateTarget ('begriff-parierstange');
					$scope.game.activateTarget ('begriff-staerke');
					$scope.game.activateTarget ('begriff-schwaeche');
					$scope.game.activateTarget ('begriff-ort');
					$scope.game.activateTarget ('begriff-klinge');
					$scope.game.activateTarget ('begriff-heft');

					$scope.game.activateItem ('begriff-knauf');
					$scope.game.activateItem ('begriff-griff');
					$scope.game.activateItem ('begriff-parierstange');
					$scope.game.activateItem ('begriff-staerke');
					$scope.game.activateItem ('begriff-schwaeche');
					$scope.game.activateItem ('begriff-ort');
					$scope.game.activateItem ('begriff-klinge');
					$scope.game.activateItem ('begriff-heft');

					// show texts:
					var sparts = document.getElementsByClassName('sword-text');
					var i = sparts.length;
					while (i--) {
						angular.element(sparts[i]).removeClass ('transparent');
					}
					sparts = null;
				}
				else if (obj.id === 'begriff-knauf') {
					$scope.game.addEventToItem ('begriff-knauf', function() {showInfo('knauf');});
					showInfo('knauf').then(function () {
						checkIfEnd(); 
					});
				}
				else if (obj.id === 'begriff-griff') {
					$scope.game.addEventToItem ('begriff-griff', function() {showInfo('griff');});
					showInfo('griff').then(function () {
						checkIfEnd(); 
					});
				}
				else if (obj.id === 'begriff-parierstange') {
					$scope.game.addEventToItem ('begriff-parierstange', function() {showInfo('parierstange');});
					showInfo('parierstange').then(function () {
						checkIfEnd(); 
					});
				}
				else if (obj.id === 'begriff-ort') {
					$scope.game.addEventToItem ('begriff-ort', function() {showInfo('ort');});
					showInfo('ort').then(function () {
						checkIfEnd(); 
					});
				}
				else if (obj.id === 'begriff-staerke') {
					$scope.game.addEventToItem ('begriff-staerke', function() {showInfo('staerke');});
					showInfo('staerke').then(function () {
						checkIfEnd(); 
					});
				}
				else if (obj.id === 'begriff-schwaeche') {
					$scope.game.addEventToItem ('begriff-schwaeche', function() {showInfo('schwaeche')});
					showInfo('schwaeche').then(function () {
						checkIfEnd(); 
					});
				}
				else if (obj.id === 'begriff-klinge') {
					$scope.game.addEventToItem ('begriff-klinge', function() {showInfo('klinge');});
					showInfo('klinge').then(function () { 
						checkIfEnd(); 
					});
				}
				else if (obj.id === 'begriff-heft') {
					$scope.game.addEventToItem ('begriff-heft', function() {showInfo('heft');});
					showInfo('heft').then(function () {
						checkIfEnd();
					});
				}
			};
			$scope.$on ('dragndrop_right-target', droppedIt);

			$scope.game.addText = function (text, beforeTag, afterTag, delay) {
				if (typeof delay === 'undefined') delay = 0;
				$scope.vars.gameText += beforeTag;
				var textAsArray = text.split ('');
				for (var i = 0; i < textAsArray.length; i++) {
					(function (i) {
						$timeout (function () {
							$scope.vars.gameText += textAsArray[i];
						}, i * 10 + delay);
					})(i);
				}
				$scope.vars.gameText += afterTag;

				// return the time the latest text will appear:
				return textAsArray.length * 10;
			};
			$scope.game.addEventToItem = function (itemname, happening) {
				angular.element(document.getElementById (itemname)).on('click', happening);
			};
			$scope.game.activateTarget = function (targetname) {
				angular.element(document.getElementById (targetname + '-target')).removeClass ('hidden');
			};
			$scope.game.activateItem = function (itemname) {
				angular.element(document.getElementById (itemname)).removeClass ('hidden');
			};
			$scope.game.start = function () {
				// stop the sliding of the page slider
				GameHelper.deactivateScrolling();
				$scope.vars.slideEnabled = false;

				var sparts = document.getElementsByClassName('sword-part');
				var i = sparts.length;
				while (i--) {
					angular.element(sparts[i]).removeClass ('transparent');
				}
				angular.element(document.getElementById('preGameScreen')).addClass('hidden');

				$scope.game.addText('Das Heft des Langen Schwerts besteht aus einem Knauf, ...', '<p>', '<br>');
				$scope.game.activateTarget ('knauf');
			};

			// Show the different information boxes:
			var showInfo = function (infoName) {
				var title = '';
				var text = '';
				switch (infoName) {
					case 'knauf' :
						title = 'Der Knauf'; 
						text = 'Der Knauf befindet sich am Ende des Hefts und dient als Gegengewicht zur Klinge. Er kann auch zum Angriff eingesetzt werden. ';
						break;
					case 'griff' :
						title = 'Der Griff'; 
						text = 'Griffe sind meistens aus Holz und mit Leder überzogen oder Draht umwickelt. Es ist wichtig, dass der Griff einen guten Halt bietet, damit das Schwert gut geführt werden kann. ';
						break;
					case 'parierstange' :
						title = 'Die Pariertstange'; 
						text = 'Die Parierstange schließt direkt an die Klinge an und dient zum Schutz, kann aber auch zum Angriff eingesetzt werden. Sie erlaubt erst den Kampf aus der Bindung.';
						break;
					case 'ort' :
						title = 'Der Ort'; 
						text = 'Der Ort ist die Spitze des Schwertes und kann unterschiedlich aussehen. Ein sehr spitzer, aber massiver Ort kann besonders gut Rüstungen durchstechen. Ein rundlicher und sehr schmaler Ort ist eher an Schwertern zu finden, die auf den Schnitt ausgelegt sind.';
						break;
					case 'staerke' :
						title = 'Die Stärke'; 
						text = 'Die Stärke ist der Bereich der Klinge, der von der Klingenmitte bis zum Heft reicht. Sie ist vor allem dazu geeignet, Energie aufzunehmen und nicht so scharf wie die Schwäche. Bindet das Schwert des Gegners in diesem Bereich an, kann man leicht hohe Kraft darauf ausüben.';
						break;
					case 'schwaeche' :
						title = 'Die Schwäche'; 
						text = 'Der Bereich der Klinge, der vom Ort bis zur Mitte der Klinge reicht, nennt man Schwäche. Bindet das Schwert des Gegners in diesem Bereich an, ist es schwierig aus der Bindung viel Kraft darauf auszuüben.';
						break;
					case 'klinge' :
						title = 'Die Klinge'; 
						text = 'Die Klinge wird zum Schneiden, Hauen und Stechen benutzt. Beim Langen Schwert ist die Klinge zweischneidig geschliffen, im Unterschied beispielsweise zum einschneidigen Catana.';
						break;
					case 'heft' :
						title = 'Das Heft'; 
						text = 'Das Heft setzt sich aus Knauf, Griff und Parierstange zusammen. Die Redewendung „Das Heft in der Hand haben” hat in diesem Begriff ihren Ursprung.';
						break;
				}
				return Campaign.showInfoPopup(title, text);
			};

			var checkIfEnd = function () {
				begriffeToDrop--;
				if (begriffeToDrop === 0) {

					// END OF GAME:

					Feedback.congratulation ('Alles klar!', 'Das Schwert ist soweit gemeistert. Herzlichen Glückwunsch!', null, 0);
					Campaign.addEnd();
					GameHelper.activateScrolling();
					$scope.vars.slideEnabled = true;
				}
			}

			$scope.$on ('dragndrop_right-target', function (e, item) {
				DragNDropHelper.moveToTarget (item.target);
			});

			/*
				PAGE SLIDER
			*/
			GameHelper.getPageSlider();
			function preventDrag (e) {
				GameHelper.preventSlide (e, 'drag-item');
			}
			$ionicGesture.on('touch', preventDrag, $element);
				
			/*
				Destroying functions
			*/ 
			$scope.$on('$destroy', function() {
				$element.remove();
				DragNDropHelper.removeWatches (watches);
			});

		}
	};
}]);