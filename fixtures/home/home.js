(function (module) {
    try {
        module = angular.module('xlite.fixtures');
    } catch (e) {
        module = angular.module('xlite.fixtures', []);
    }
    module.value('fixturehomehome', {
  "see": "more",
  "clearly": "with"
});})();
