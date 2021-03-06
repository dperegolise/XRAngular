angular.module('xlite.services.posts', [
  'xlite.config',
  'xlite.models.apiError',
  'xlite.models.posts'
])
  .service('postsService',
  function(Endpoints, ENVIRONMENT, ApiError, $http, $q, Post) {
    'use strict';

    var rootPath = ENVIRONMENT.API_PATH;

    /**
     * @class postsService
     *
     **/

    var getAll = function() {
      var defer = $q.defer();
      var url = rootPath + Endpoints.posts.default;

      $http(
        {
          method: 'GET',
          url: url,
          cache: false
        }
      )
        .success(function(response) {
          if(!Array.isArray(response)) {
            throw 'response must be an array';
          }
          var typedResp = [];
          _.each(response, function(post) {
            typedResp.push(new Post(post));
          });
          defer.resolve(typedResp);
        })
        .error(function(data, status, headers, config) {
          var apiError = new ApiError(data, status, headers, config);
          defer.reject(apiError);
        });

      return defer.promise;
    };

    return {
      getAll: getAll
    };

  });