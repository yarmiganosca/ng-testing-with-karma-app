var app = angular.module('ngTestingTalkApp', [
  'mainController',
  'qrngApi',
  'randomNumberGenerator',
  'userPresenter',
  'greeting'
]);

app.config(function ($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainController'
  }).otherwise({
    redirectTo: '/'
  });
});
