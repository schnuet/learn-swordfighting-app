angular.module('starter.services')

.factory ('Profile', ['DataStorage', function (DataStorage) {

	var _self = {

		// the interesting user data:
		data : {
			score : 0,
			name : '',
			levelprogress : 1, 
			achievements: {
				createdAccount : false
			}
		},

		loadLastUser : function () {
			var username = DataStorage.get ('username');
			console.log ('username loaded from memory: ' + username);
			if (username === null) return false;
			
			return _self.getUser (username);
		},

		getUser : function (name) {
			name = normalizeName (name);
			_self.data = _self.load (name);
			return _self.data;
		}, 

		createNew : function (username) {
			DataStorage.set ('username', username);

			// set the data to the default set of data
			_self.data = {
				score : 0,
				name : username, 
				levelprogress : 1, 
				achievements : {
					createdAccount : false
				}
			}

			_self.save ();
			return _self.data;
		},

		save : function () {
			var dataAsStr = JSON.stringify (_self.data);
			DataStorage.set ('user_' + normalizeName(_self.data.name), dataAsStr);
		}, 
		load : function (name) {
			name = normalizeName (name);
			var d = DataStorage.get ('user_' + name);
			return JSON.parse (d);
		}
	};

	function normalizeName (name) {
		name = name.toLowerCase();
		name = name.replace(/[^a-z0-9]/g, '');
		return name;
	}

	return _self;
}]);