angular.module('starter.directives')

.directive('preventBounce', [
function () {
	return {
		restrict: 'A',
		link: function (scope, elem) {
			console.log ('preventBounce loaded');
			document.addEventListener("touchmove", function(event) {

			   /* if (event.target.tagName != "TEXTAREA") { // Element that you don't want to be prevented default event.

			          event.preventDefault();
			    }*/
			    console.log ('stop');
			    event.preventDefault();
			});
		}
	};
}]);