angular.module('starter.services')

.factory ('Profile', ['DataStorage', 'Utility', function (DataStorage, Utility) {

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
			var username = DataStorage.getRaw ('username');
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
			DataStorage.setRaw ('username', username);

			// set the data to the default set of data
			_self.data = {
				score : 0,
				name : username, 
				levelprogress : 1, 
				achievements : {
					createdAccount : false
				}
			}

			// add the profile to the list of existing profiles
			var p = DataStorage.get('profiles');
			p = Utility.mergeStringArrays (p, [username]);
			console.log (p);
			DataStorage.set ('profiles', p);
			p = null;

			_self.save ();
			return _self.data;
		},

		getListOfUsers: function () {
			var p = DataStorage.get('profiles');
			if (p === null) {
				DataStorage.set ('profiles', []);
				p = [];
			}
			console.log (p);
			var r = [];
			var i = p.length;
			while (i--) {
				r[i] = {
					name : p[i],
					account: normalizeName (p[i])
				};
			}
			return r;
		},

		save : function () {
			DataStorage.set ('user_' + normalizeName(_self.data.name), _self.data);
		}, 
		load : function (name) {
			name = normalizeName (name);
			var d = DataStorage.get ('user_' + name);
			return d;
		},
		remove: function () {
			// remove the profile from the list of existing profiles
			var p = DataStorage.get('profiles');
			p.splice(p.indexOf(_self.data.name), 1);
			DataStorage.set ('user_' + normalizeName(_self.data.name), null);
			DataStorage.set ('profiles', p);
		}
	};

	function normalizeName (name) {
		name = name.toLowerCase();
		name = name.replace(/[^a-z0-9]/g, '');
		return name;
	}

	return _self;
}]);