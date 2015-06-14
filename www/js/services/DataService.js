angular.module('starter.services')

.factory ('Data', [function () {

	var _self = {
		user : '', 
		lessonDirectories : [
			'0-null',
			'1-schwertbegriffe',
			'2-grundpositionen',
			'3-haltung',
			'4-quellen',
			'5-angriffe',
			'6-das-scharfe-schwert',
			'7-schutzausruestung',
			'8-prinzipien',
			'9-eine-fechtgruppe-finden'
		]
	};
	return _self;
}]);