/**
 * Created on 7/20/2015.
 * featureA.service -
 */
angular.module('xlite.featureA')
  .service('featureAService', featureAService);

function featureAService() {

  return {
    get: function() {
      return 'service message';
    }
  };
}
