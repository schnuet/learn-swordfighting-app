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

  // Neuer Benutzer - Seite:
  .state('help', {
    url: '/help',
    templateUrl: 'templates/help.html',
    controller: 'HelpCtrl'
  })  

  // Neuer Benutzer - Seite:
  .state('start', {
    url: '/start',
    templateUrl: 'templates/start.html',
    controller: 'StartCtrl'
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

  // Glossar:
  .state('menu.glossar', {
    url: '/glossar',
    views: {
      'menuContent': {
        templateUrl: 'templates/glossar.html', 
        //controller: 'GlossarCtrl'
      }
    }
  })


	// Startseite:
	.state('menu.dashboard', {
		url: '/start',
		views: {
			'menuContent': {
				templateUrl: 'templates/dashboard.html', 
        controller: 'ProfileCtrl'
			}
		}
	})

  /*
    CAMPAIGN-LESSONS
  */
  .state('menu.campaign-lesson-1', {
    url: '/campaign_lesson1/',
    params : { campaign: true },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/1-schwertbegriffe/lesson_01.html',
        controller: '01_SchwertbegriffeCtrl'
      }
    }
  })

  .state('menu.campaign-lesson-2', {
    url: '/campaign_lesson2/',
    params : { campaign: true },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/2-der-griff/lesson_02.html',
        controller: '02_DerGriffCtrl'
      }
    }
  })

  .state('menu.campaign-lesson-3', {
    url: '/campaign_lesson3/',
    params : { campaign: true },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/3-beinarbeit/lesson_03.html',
        controller: '03_BeinarbeitCtrl'
      }
    }
  })

  .state('menu.campaign-lesson-4', {
    url: '/campaign_lesson4/',
    params : { campaign: true },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/4-huten/lesson_04.html',
        controller: '04_HutenCtrl'
      }
    }
  })

  .state('menu.campaign-lesson-5', {
    url: '/campaign_lesson5/',
    params : { campaign: true },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/5-quellen/lesson_05.html',
        controller: '05_QuellenCtrl'
      }
    }
  })

  .state('menu.campaign-lesson-6', {
    url: '/campaign_lesson6/',
    params : { campaign: true },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/6-angriffe/lesson_06.html',
        controller: '06_AngriffeCtrl'
      }
    }
  })

  .state('menu.campaign-lesson-7', {
    url: '/campaign_lesson7/',
    params : { campaign: true },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/7-schnitttests/lesson_07.html',
        controller: '07_SchnitttestsCtrl'
      }
    }
  })

  .state('menu.campaign-lesson-8', {
    url: '/campaign_lesson8/',
    params : { campaign: true },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/8-schutzausruestung/lesson_08.html',
        controller: '08_SchutzausruestungCtrl'
      }
    }
  })

  .state('menu.campaign-lesson-9', {
    url: '/campaign_lesson9/',
    params : { campaign: true },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/9-mensur/lesson_09.html',
        controller: '09_MensurCtrl'
      }
    }
  })

  .state('menu.campaign-lesson-10', {
    url: '/campaign_lesson10/',
    params : { campaign: true },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/10-die-fuenf-woerter/lesson_10.html',
        controller: '10_DieFuenfWoerterCtrl'
      }
    }
  })


  /*
    CATALOG - LESSONS:
  */
  .state('menu.lesson-1', {
    url: '/lesson1/',
    params : { campaign: false },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/1-schwertbegriffe/lesson_01.html',
        controller: '01_SchwertbegriffeCtrl'
      }
    }
  })

  .state('menu.lesson-2', {
    url: '/lesson2/',
    params : { campaign: false },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/2-der-griff/lesson_02.html',
        controller: '02_DerGriffCtrl'
      }
    }
  })

  .state('menu.lesson-3', {
    url: '/lesson3/',
    params : { campaign: false },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/3-beinarbeit/lesson_03.html',
        controller: '03_BeinarbeitCtrl'
      }
    }
  })

  .state('menu.lesson-4', {
    url: '/lesson4/',
    params : { campaign: false },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/4-huten/lesson_04.html',
        controller: '04_HutenCtrl'
      }
    }
  })

  .state('menu.lesson-5', {
    url: '/lesson5/',
    params : { campaign: false },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/5-quellen/lesson_05.html',
        controller: '05_QuellenCtrl'
      }
    }
  })

  .state('menu.lesson-6', {
    url: '/lesson6/',
    params : { campaign: false },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/6-angriffe/lesson_06.html',
        controller: '06_AngriffeCtrl'
      }
    }
  })

  .state('menu.lesson-7', {
    url: '/lesson7/',
    params : { campaign: false },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/7-schnitttests/lesson_07.html',
        controller: '07_SchnitttestsCtrl'
      }
    }
  })

  .state('menu.lesson-8', {
    url: '/lesson8/',
    params : { campaign: false },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/8-schutzausruestung/lesson_08.html',
        controller: '08_SchutzausruestungCtrl'
      }
    }
  })

  .state('menu.lesson-9', {
    url: '/lesson9/',
    params : { campaign: false },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/9-mensur/lesson_09.html',
        controller: '09_MensurCtrl'
      }
    }
  })

  .state('menu.lesson-10', {
    url: '/lesson10/',
    params : { campaign: false },
    views: {
      'menuContent': {
        templateUrl: 'templates/lessons/10-die-fuenf-woerter/lesson_10.html',
        controller: '10_DieFuenfWoerterCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('start');

});
