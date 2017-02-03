angular.module('xlite.services.posts', [
  'xlite.config',
  'xlite.models.apiError'
])
  .service('postsService',
  function(Endpoints, ENVIRONMENT, ApiError, $http, $q) {
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
          defer.resolve(response);
        })
        .error(function(data, status, headers, config) {
          var apiError = new ApiError(data, status, headers, config);
          defer.reject(apiError);
        });

      return defer.promise;
    };

    return {
      getAll: getAll
    }

  });