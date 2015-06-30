angular.module('starter.services')

.factory ('Utility', [function () {

	/*
		Merge two string arrays into one, delete duplicate idems
	*/
	function mergeStringArrays(a, b){
	    var hash = {};
	    var ret = [];

	    for(var i=0; i < a.length; i++){
	        var e = a[i];
	        if (!hash[e]){
	            hash[e] = true;
	            ret.push(e);
	        }
	    }

	    for(var i=0; i < b.length; i++){
	        var e = b[i];
	        if (!hash[e]){
	            hash[e] = true;
	            ret.push(e);
	        }
	    }

	    return ret;
	}

	var _self = {
		mergeStringArrays: mergeStringArrays
	};
	return _self;
}]);