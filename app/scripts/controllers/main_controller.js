angular.module('mainController', [])
  .controller('MainController', function ($scope) {
    $scope.setup = function () {
      $scope.finishedSetup = true;
    };
  });
