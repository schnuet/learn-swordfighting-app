angular.module('starter.services')

.factory ('CssDoctor', [function () {

	var _self = {
		getStyleRuleValue : function (style, selector) {
			for (var i = 0; i < document.styleSheets.length; i++) {
				var mysheet = document.styleSheets[i];
				var myrules = mysheet.cssRules ? mysheet.cssRules : mysheet.rules;
				for (var j = 0; j < myrules.length; j++) {
					if (myrules[j].selectorText && myrules[j].selectorText.toLowerCase().indexOf(selector) !== -1) {
						return myrules[j].style[style];
					}
				}
			}
		}
	};
	return _self;
}]);