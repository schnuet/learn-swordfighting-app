angular.module('starter.services')

.factory ('CssDoctor', [function () {

	var getStyleRuleValue = function (style, selector) {
		for (var i = 0; i < document.styleSheets.length; i++) {
			var mysheet = document.styleSheets[i];
			var myrules = mysheet.cssRules ? mysheet.cssRules : mysheet.rules;
			for (var j = 0; j < myrules.length; j++) {
				if (myrules[j].selectorText && myrules[j].selectorText.toLowerCase().indexOf(selector) !== -1) {
					return myrules[j].style[style];
				}
			}
		}
	};

	var getOffsetsInParent = function (element, parentclass) {
		var reachedParent = false;
		var offsets = {
			left : element.offsetLeft,
			top : element.offsetTop
		};
		while (reachedParent === false && element.offsetParent !== null) {
			element = element.offsetParent;
			if (element.className.indexOf(parentclass) !== -1) {
				reachedParent = true;
			}
			else {
				/*console.log (element.offsetTop);
				console.log (element);*/
				offsets.left += element.offsetLeft;
				offsets.top += element.offsetTop;
			}
		}
		return offsets;
	};

	var _self = {
		getStyleRuleValue : getStyleRuleValue,
		getOffsetsInParent : getOffsetsInParent
	};
	return _self;
}]);