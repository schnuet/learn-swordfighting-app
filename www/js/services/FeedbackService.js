angular.module('starter.services')

/*
	Provides standardised Feedback functions to react for common events.
*/

.factory ('Feedback', 
['Data','$ionicPopup', '$timeout', '$q',
function (Data, $ionicPopup, $timeout, $q) {

	var addCloseHandler = function (elclassname, popuphandle, promise) {
		var el = document.getElementsByClassName(elclassname)[0];
		if (typeof el === 'undefined') {
			$timeout (function () {
				addCloseHandler (elclassname, popuphandle, promise);
			}, 300);
			return false;
		}
		console.log (el);
		angular.element(el).on('click', function () { 
			console.log ('closing congratulation');
			popuphandle.close(); 
			promise.resolve(true);
		});
	};

	var _self = {
		congratulation : function (title, text, image, delay) {

			var finishedShowing = $q.defer();
			if (typeof delay === 'undefined') {
				delay = 0;
			}
			var imageClass = '';
			if (typeof image !== 'undefined' && image !== null && image !== false) {
				imageClass = 'image';
			}
			// show the popup after the selected delay
			$timeout (function () {
				var myPopup = $ionicPopup.show({
					template: text,
					cssClass: 'congratulation ' + imageClass,
					title: title,
					subTitle: '',
					buttons: [
					]
				});
				// add a close event to the popup:
				$timeout (function () {
					addCloseHandler ('congratulation', myPopup, finishedShowing);
				}, 400);
			}, delay);
			return finishedShowing.promise;
		},

		sorry : function (title, text, image, delay) {
			var finishedShowing = $q.defer();
			if (typeof delay === 'undefined') {
				delay = 0;
			}
			// show the popup after the selected delay
			$timeout (function () {
				var myPopup = $ionicPopup.show({
					template: text,
					cssClass: 'sorry',
					title: title,
					subTitle: '',
					buttons: [
					]
				});
				// add a close event to the popup:
				$timeout (function () {
					var el = document.getElementsByClassName('sorry')[0];
					console.log (el);
					angular.element(el).on('click', function () { 
						console.log ('closing sorry message');
						myPopup.close(); 
						finishedShowing.resolve(true);
					});
				}, 300);
			}, delay);
			return finishedShowing.promise;
		},

		info : function (title, text, cssClass) {
			var finishedShowing = $q.defer();
			if (typeof cssClass === 'undefined') cssClass = '';
			// An elaborate, custom popup
			var myPopup = $ionicPopup.show({
				template: text,
				cssClass: 'infoPopup ' + cssClass,
				title: title,
				subTitle: '',
				buttons: [
				]
			});
			$timeout (function () {
				var el = document.getElementsByClassName('infoPopup')[0];
				console.log (el);
				angular.element(el).on('click', function () { 
					console.log ('closing infopopup');
					myPopup.close(); 
					finishedShowing.resolve (true);
				});
			}, 300);
			return finishedShowing.promise;
		}
	};

	return _self;
}]);
