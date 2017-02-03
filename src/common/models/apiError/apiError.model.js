/**
 * Created by mike on 10/12/2014.
 */
angular.module('xlite.models.apiError', [])
  .factory('ApiError', function() {

    /**
     * @class ApiError
     * @extends Error
     * @param {string} data - from $http
     * @param {number} status - from $http
     * @param {string} headers - from $http
     * @param {string} config - other information
     *
     * @constructor
     * @property {string} exceptionMessage
     * @property {string} message - user message
     * @property {string} stackTrace - stack
     * @property {number} status - url status code
     */
    var ApiError = function(data, status, headers, config) {
      var vm = this;
      vm.message = 'Unknown Error';
      vm.additional = 'An unknown error has occurred.';
      vm.stackTrace = null;
      vm.exceptionMessage = null;
      vm.status = null;
      vm.headers = null;
      vm.config = null;

      if (data) {
        vm.message = (data.hasOwnProperty('message')) ? data.message :
          'Unknown Error';

        vm.additional = data.hasOwnProperty('additional') ?
          data.additional : '';

        vm.stackTrace = (data.hasOwnProperty('stackTrace')) ?
          data.stackTrace : '';

        vm.exceptionMessage = (data.hasOwnProperty('exceptionMessage')) ?
          data.exceptionMessage : '';
      }
      if (status == 401) {
        vm.additional = 'Your session has expired. Please login again.';
        vm.message = 'Login Expired';
      }
      vm.status = status;
      vm.headers = headers;
      vm.config = config;
    };

    var Intermediary = function() {
    };

    Intermediary.prototype = Error.prototype;
    ApiError.prototype = new Intermediary();

    return ApiError;
  });
