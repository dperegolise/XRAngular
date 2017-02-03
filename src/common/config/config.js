/**
 * Created on 6/1/2014.
 */
angular.module('xlite.config', [])
  .constant('Endpoints', {
    posts: {
      default: 'api/posts'
    }
  })
  .constant('States', {
    home: {
      default: 'xlite.home'
    },
    app: {
      default: 'xlite'
    },
    featureA: {
      default: 'xlite.featureA'
    }
  });
