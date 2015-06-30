angular.module('starter.services')

.factory ('DataStorage', [function () {

	var _self = {
		get : function (item) {
			return JSON.parse (localStorage.getItem (item));
		}, 
		set : function (item, value) {
			localStorage.setItem (item, JSON.stringify(value));
		}, 
		getRaw: function (item) {
			return localStorage.getItem (item);
		},
		setRaw: function (item, value) {
			localStorage.setItem (item, value);
		}
	};
	return _self;
}]);