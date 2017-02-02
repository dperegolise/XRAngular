/**
 * Main entry point for app
 */
angular.module(
  'xlite', [
    'ngAnimate',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'templates-app',
    'templates-common',
    'ngMessages',
    'LocalStorageModule',
    'xlite.config',
    'xlite.config.path',
    'xlite.nav',
    'xlite.home',
    'xlite.featureA'
  ]
)
  .config(
  function($stateProvider, $compileProvider,
           ENVIRONMENT,
           $urlRouterProvider, $httpProvider,
           States) {

    /**
     * The global angular object comes with a new
     * .reloadWithDebugInfo() method, which does exactly what it says.
     * It reloads the browser with debug information to make
     * your life easier again.
     */
    if (ENVIRONMENT.ENV !== 'working') {
      $compileProvider.debugInfoEnabled(false);
    }

    $stateProvider
      .state(
      States.app.default, {
        abstract: true,
        views: {
          'header': {
            templateUrl: 'templates/header.tpl.html'
          },
          'nav': {
            templateUrl: 'templates/nav.tpl.html',
            controller: 'NavController as navi'
          },
          'content': {
            // Empty by Design (yep!)
          },
          'footer': {
            templateUrl: 'templates/footer.tpl.html'
          }
        }
      }
    );

    $urlRouterProvider.otherwise('/home');
  }
)
  .controller('XliteController', XliteController);

function XliteController() {
  'use strict';
}
