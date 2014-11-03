var timeApp = angular.module('TimerApp', []);

timeApp.config(function($routeProvider){
  $routeProvider 
    .when('/',
  {
    controller: 'TimerCtrl',
    templateUrl: 'index.html'
  })

    .when('/break.html'
  {
    controller: 'TimerCtrl',
    templateUrl: 'break.html'
  })
    .otherwise({redirectTo: '/'}); 
});