angular.module('greeting', [])
  .directive('greet', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/views/greet.html',
      scope: {
        name: '@'
      }
    };
  });
