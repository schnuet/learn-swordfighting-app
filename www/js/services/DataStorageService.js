angular.module('starter.services')

.factory ('DataStorage', [function () {

	var _self = {
		get : function (item) {
			return localStorage.getItem (item);
		}, 
		set : function (item, value) {
			localStorage.setItem (item, value);
		}
	};
	return _self;
}]);