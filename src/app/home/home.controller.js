/**
 * Created on 7/18/2015.
 * home.controller -
 */
angular.module('xlite.home')
  .controller('HomeController', HomeController)
  .config(function($stateProvider, States) {
    'use strict';
    $stateProvider.state(States.home.default, {
      url: '/home',
      views: {
        'content@': {
          templateUrl: 'home/home.tpl.html',
          controller: 'HomeController as home'
        }
      }
    });
  }
);

function HomeController(postsService) {
  'use strict';

  var vm = this;
  vm.posts = [];

  activate();

  /**
   * fetches intervals
   */
  function activate() {
    postsService.getAll().then(function(response) {
      vm.posts = response;
    });
  }
}
