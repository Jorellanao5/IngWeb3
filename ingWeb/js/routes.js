angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('men.inicio', {
    url: '/inicio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('men.gNeros', {
    url: '/generos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gNeros.html',
        controller: 'gNerosCtrl'
      }
    }
  })

  .state('men.favoritos', {
    url: '/favoritos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/favoritos.html',
        controller: 'favoritosCtrl'
      }
    }
  })

  .state('men', {
    url: '/menu',
    templateUrl: 'templates/men.html',
    controller: 'menCtrl'
  })

  .state('men.crDitos', {
    url: '/creditos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/crDitos.html',
        controller: 'crDitosCtrl'
      }
    }
  })

  .state('men.cantante', {
    url: '/cantante',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cantante.html',
        controller: 'cantanteCtrl'
      }
    }
  })

  .state('men.pop', {
    url: '/pop',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pop.html',
        controller: 'popCtrl'
      }
    }
  })

  .state('men.rock', {
    url: '/rock',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rock.html',
        controller: 'rockCtrl'
      }
    }
  })

  .state('men.salsa', {
    url: '/salsa',
    views: {
      'side-menu21': {
        templateUrl: 'templates/salsa.html',
        controller: 'salsaCtrl'
      }
    }
  })

  .state('men.bachata', {
    url: '/bachata',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bachata.html',
        controller: 'bachataCtrl'
      }
    }
  })

  .state('men.electrNica', {
    url: '/electronica',
    views: {
      'side-menu21': {
        templateUrl: 'templates/electrNica.html',
        controller: 'electrNicaCtrl'
      }
    }
  })

  .state('men.cumbia', {
    url: '/cumbia',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cumbia.html',
        controller: 'cumbiaCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/menu/inicio')

  

});