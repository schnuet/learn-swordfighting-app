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
    url: '/kampagne/lektion',
    params : { lessonnumber: 1 },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/1-schwertbegriffe/1.html',
        controller: 'CampaignCtrl'
      }
    }
  })

  .state('menu.campaign-lesson-2', {
    url: '/kampagne/lektion',
    params : { lessonnumber: 2 },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/2-grundpositionen/1.html',
        controller: 'CampaignCtrl'
      }
    }
  })

  .state('menu.campaign-lesson-3', {
    url: '/kampagne/lektion',
    params : { lessonnumber: 3 },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/3-haltung/1.html',
        controller: 'CampaignCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('menu/start');

});
