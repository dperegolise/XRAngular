(function (module) {
    try {
        module = angular.module('xlite.fixtures');
    } catch (e) {
        module = angular.module('xlite.fixtures', []);
    }
    module.value('fixturefeatureAfeatureA', [
  {
    "bing": "bam",
    "boom": "biff"
  },
  {
    "bing": "pow",
    "boom": "pop"
  }
]);})();
