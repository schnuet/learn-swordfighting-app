angular.module('starter.directives')

.directive('gameSwordParts', ['$ionicGesture', '$ionicSlideBoxDelegate', 'DragNDropHelper', '$timeout', 'Campaign',
function($ionicGesture, $ionicSlideBoxDelegate, DragNDropHelper, $timeout, Campaign) {

	
	return {
		restrict: 'E',
		replace: false,
		link: function($scope, $element, $attributes) {

			var watches = DragNDropHelper.watchElement ($element);

			$scope.vars.gameText = '<p>Baue das Schwert nach dem Text zusammmen! </p>';

			var droppedIt = function (e, obj) {
				if (obj.id === 'knauf') {
					$scope.game.addText('dem Griff, ...<br/>');
					$scope.game.activateTarget ('griff');
				}
				else if (obj.id === 'griff') {
					$scope.game.addText('und der Parierstange.<br/>');
					$scope.game.activateTarget ('parierstange');
				}
				else if (obj.id === 'parierstange') {
					$scope.game.addText('Das zweite Stück ist die Klinge. Sie ist in die Bereiche Stärke, ...<br/>');
					$scope.game.activateTarget ('staerke');
				}
				else if (obj.id === 'staerke') {
					$scope.game.addText('Schwäche, ...<br/>');
					$scope.game.activateTarget ('schwaeche');
				}
				else if (obj.id === 'schwaeche') {
					$scope.game.addText('und Ort eingeteilt.</p>');
					$scope.game.activateTarget ('ort');
				}
				else if (obj.id === 'ort') {

					// remove text:
					$scope.vars.gameText = '';
					$scope.game.addText ('<p>Alles klar! Mal sehen, wie viel hängen geblieben ist.<br />' +
										'Ordne die Begriffe richtig zu!</p>');

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
					showKnaufInfo();
					$scope.game.addEventToItem ('begriff-knauf', showKnaufInfo);
				}
				else if (obj.id === 'begriff-griff') {
					showGriffInfo();
					$scope.game.addEventToItem ('begriff-griff', showGriffInfo);
				}
				else if (obj.id === 'begriff-parierstange') {
					showParierstangeInfo();
					$scope.game.addEventToItem ('begriff-parierstange', showParierstangeInfo);
				}
				else if (obj.id === 'begriff-ort') {
					showOrtInfo();
					$scope.game.addEventToItem ('begriff-ort', showOrtInfo);
				}
				else if (obj.id === 'begriff-staerke') {
					showStaerkeInfo();
					$scope.game.addEventToItem ('begriff-staerke', showStaerkeInfo);
				}
				else if (obj.id === 'begriff-schwaeche') {
					showSchwaecheInfo();
					$scope.game.addEventToItem ('begriff-schwaeche', showSchwaecheInfo);
				}
				else if (obj.id === 'begriff-klinge') {
					showKlingeInfo();
					$scope.game.addEventToItem ('begriff-klinge', showKlingeInfo);
				}
				else if (obj.id === 'begriff-heft') {
					showHeftInfo();
					$scope.game.addEventToItem ('begriff-heft', showHeftInfo);
				}
			};
			$scope.$on ('dragndrop_right-target', droppedIt);

			$scope.game.addText = function (text) {
				var textAsArray = text.split ('');
				for (var i = 0; i < textAsArray.length; i++) {
					(function (i) {
						$timeout (function () {
							$scope.vars.gameText += textAsArray[i];
						}, i * 10);
					})(i);
				}
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
				var sparts = document.getElementsByClassName('sword-part');
				var i = sparts.length;
				while (i--) {
					angular.element(sparts[i]).removeClass ('transparent');
				}
				angular.element(document.getElementById('gameStartButton')).addClass('hidden');

				$scope.game.addText('<p>Das Heft des Langen Schwerts besteht aus einem Knauf, ...<br/>');
				$scope.game.activateTarget ('knauf');
			};


			var showKnaufInfo = function () {
				Campaign.showInfoPopup('Der Knauf', 'Der Knauf befindet sich am Ende des Hefts und dient als Gegengewicht zur Klinge. Er kann auch zum Angriff eingesetzt werden. ');
			};
			var showGriffInfo = function () {
				Campaign.showInfoPopup('Der Griff', 'Griffe sind meistens aus Holz und mit Leder überzogen oder Draht umwickelt. Es ist wichtig, dass der Griff einen guten Halt bietet, damit das Schwert gut geführt werden kann.');
			};
			var showParierstangeInfo = function () {
				Campaign.showInfoPopup('Die Parierstange', 'Die Parierstange schließt direkt an die Klinge an und dient zum Schutz, kann aber auch zum Angriff eingesetzt werden. Sie erlaubt erst den Kampf aus der Bindung.');
			};
			var showOrtInfo = function () {
				Campaign.showInfoPopup('Der Ort', 'Der Ort ist die Spitze des Schwertes und kann unterschiedlich aussehen. Ein sehr spitzer, aber massiver Ort kann besonders gut Rüstungen durchstechen. Ein rundlicher und sehr schmaler Ort ist eher an Schwertern zu finden, die auf den Schnitt ausgelegt sind.');
			};
			var showStaerkeInfo = function () {
				Campaign.showInfoPopup('Die Stärke', 'Die Stärke ist der Bereich der Klinge, der von der Klingenmitte bis zum Heft reicht. Sie ist vor allem dazu geeignet, Energie aufzunehmen und nicht so scharf wie die Schwäche. Bindet das Schwert des Gegners in diesem Bereich an, kann man leicht hohe Kraft darauf ausüben.');
			};
			var showSchwaecheInfo = function () {
				Campaign.showInfoPopup('Die Schwäche', 'Der Bereich der Klinge, der vom Ort bis zur Mitte der Klinge reicht, nennt man Schwäche. Bindet das Schwert des Gegners in diesem Bereich an, ist es schwierig aus der Bindung viel Kraft darauf auszuüben.');
			};
			var showKlingeInfo = function () {
				Campaign.showInfoPopup('Die Klinge', 'Die Klinge wird zum Schneiden, Hauen und Stechen benutzt. Beim Langen Schwert ist die Klinge zweischneidig geschliffen, im Unterschied beispielsweise zum einschneidigen Catana.');
			};
			var showHeftInfo = function () {
				Campaign.showInfoPopup('Das Heft', 'Das Heft setzt sich aus Knauf, Griff und Parierstange zusammen. Die Redewendung „Das Heft in der Hand haben” hat in diesem Begriff ihren Ursprung.');
			};

			/*
				prevent dragging of page slider:
			*/
			var pageSlider = $ionicSlideBoxDelegate.$getByHandle('pageSlidebox');
			var reportEvent = function (e) {
				if (e.target.className.indexOf('drag-item') !== -1) {
					pageSlider.enableSlide(false);
				} else {
					pageSlider.enableSlide(true);
				}
			};
			$ionicGesture.on('touch', reportEvent, $element);
				
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