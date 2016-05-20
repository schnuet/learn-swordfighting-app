angular.module('starter.services')

/*
	Provides standardised Feedback functions to react for common events.
*/

.factory ('GameHelper', 
['$ionicSlideBoxDelegate',
function ($ionicSlideBoxDelegate) {

	var _self = {
		/*
			PAGE SLIDER
		*/

		slideEnabled : true,
		pageSlider : null,
		pageSliderBox : null,

		getPageSlider : function  () {

			// get the page slidebox:
			_self.pageSlider = $ionicSlideBoxDelegate.$getByHandle('pageSlidebox');
			_self.slideEnabled = true;
			return _self.pageSlider;
		},

		// function for halting the scrolling of the slidebox
		deactivateScrolling : function () {
			_self.pageSliderBox = angular.element(document.getElementsByClassName('slider-pager')[0]);
			_self.pageSliderBox.addClass('hidden');
			_self.slideEnabled = false;
			_self.pageSlider.enableSlide (false);
		},

		// function for halting the scrolling of the slidebox
		activateScrolling : function () {
			_self.slideEnabled = true;
			_self.pageSliderBox.removeClass('hidden');
			_self.pageSlider.enableSlide (true);
		},

		// prevent drag on drag'n'drop
		preventSlide : function (e, className) {
			if (e.target.className.indexOf('drag-item') !== -1) {
				_self.pageSlider.enableSlide(false);
			} else {
				_self.pageSlider.enableSlide(_self.slideEnabled);
			}
		}
	};

	return _self;
}]);