//  Hier werden alle Unterseiten der App definiert:
// 

angular.module('starter')

.config(function($stateProvider, $urlRouterProvider) {

  // Die App lässt sich in einzelne 'states' aufteilen.
  // Ein state besteht aus einem Seitenlayout - wobei mehrere States ineinander verschachtelt sein können.
  // Zum Beispiel benötigt das ganze Programm das Menu, deshalb sind alle states unterstates der Menüansicht

  $stateProvider

	// setup an abstract state for the menu directive
	.state('menu', {
    url: "/menu",
    abstract: true,
    templateUrl: "templates/menu.html", 
    controller: 'MenuCtrl'
  })

  // Neuer Benutzer - Seite:
  .state('profileCreation', {
    url: '/profile/create',
    templateUrl: 'templates/profile-creation.html',
    controller: 'ProfileCreationCtrl'
  })  

  // Impressum:
  .state('menu.Impressum', {
    url: '/impressum',
    views: {
      'menuContent': {
        templateUrl: 'templates/impressum.html'
      }
    }
  })


	// Startseite:
	.state('menu.dashboard', {
		url: '/start',
		views: {
			'menuContent': {
				templateUrl: 'templates/dashboard.html'
			}
		}
	})

  .state('menu.campaign-lesson-1', {
    url: '/lesson1/',
    params : { campaign: true },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/1-schwertbegriffe/lesson_01.html',
        controller: '01_SchwertbegriffeCtrl'
      }
    }
  })

  .state('menu.campaign-lesson-2', {
    url: '/lesson2/',
    params : { campaign: true },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/2-grundpositionen/lesson_02.html',
        controller: '02_GrundpositionenCtrl'
      }
    }
  })

  .state('menu.campaign-lesson-3', {
    url: '/lesson3/',
    params : { campaign: true },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/3-haltung/lesson_03.html',
        controller: '03_HaltungCtrl'
      }
    }
  })

  .state('menu.campaign-lesson-4', {
    url: '/lesson4/',
    params : { campaign: true },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/4-quellen/lesson_04.html',
        controller: '04_QuellenCtrl'
      }
    }
  })

  .state('menu.campaign-lesson-5', {
    url: '/lesson5/',
    params : { campaign: true },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/5-angriffe/lesson_05.html',
        controller: '05_AngriffeCtrl'
      }
    }
  })

  .state('menu.campaign-lesson-6', {
    url: '/lesson6/',
    params : { campaign: true },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/6-das-scharfe-schwert/lesson_06.html',
        controller: '06_DasScharfeSchwertCtrl'
      }
    }
  })

  .state('menu.campaign-lesson-7', {
    url: '/lesson7/',
    params : { campaign: true },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/7-schutzausruestung/lesson_07.html',
        controller: '07_SchutzausruestungCtrl'
      }
    }
  })

  .state('menu.campaign-lesson-8', {
    url: '/lesson8/',
    params : { campaign: true },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/8-prinzipien/lesson_08.html',
        controller: '08_PrinzipienCtrl'
      }
    }
  })

  .state('menu.campaign-lesson-9', {
    url: '/lesson9/',
    params : { campaign: true },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/9-eine-fechtgruppe-finden/lesson_09.html',
        controller: '09_FechtgruppeFindenCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('menu/start');

});
