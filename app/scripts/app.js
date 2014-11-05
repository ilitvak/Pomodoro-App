/*
sound = new buzz.sound('https://dl.dropboxusercontent.com/s/tyyr2q2sr6hz2zn/Every%20Day%20I%27m%20Hustlin%27%20-%20Rick%20Ross%20%28Remix_soundcloud_3524009.mp3?dl=0', {
  formats: ["mp3"],
  preload: true
}); */

var TimerApp = angular.module('TimerApp', ['ui.router']);

TimerApp.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);  

  $stateProvider.state('work', {
    url: '/',
    controller: 'WorkCtrl',
    templateUrl: '/templates/work.html'
    });


  $stateProvider.state('break', {
    url: '/break',
    controller: 'BreakCtrl',
    templateUrl: '/templates/break.html'
    }); 
  

}]);

// Seperating Controller to be more organized // Main Ctrl
TimerApp.controller('TimerCtrl', ['$scope', '$interval', function($scope, $interval){
console.log('TimerCtrl');
 
  $scope.timeLeft = 20;  
  $scope.timeStart = function(){
  $scope.disabled = true;
    time = $interval(function(){
      $scope.timeLeft--;
      if($scope.timeLeft === 0){
        $interval.cancel(time);
        /*sound.play();*/
      }
    }, 1000 );
  };  
  
  $scope.stopTimer = function(){
    $scope.disabled = false;
    $interval.cancel(time);
    /*sound.pause();*/
  }
  $scope.resetTimer = function(){
    $scope.disabled = false;
    $scope.timeLeft = 10;
  }
  }]);

// Work Controller 

TimerApp.controller('WorkCtrl', ['$scope', '$interval', function($scope, $interval){
console.log('WorkCtrl');
 
  $scope.timeLeft = 100;  
  $scope.timeStart = function(){
  $scope.disabled = true;
    time = $interval(function(){
      $scope.timeLeft--;
      if($scope.timeLeft === 0){
        $interval.cancel(time);
        /*sound.play();*/
      }
    }, 1000 );
  };  
  
  $scope.stopTimer = function(){
    $scope.disabled = false;
    $interval.cancel(time);
    /*sound.pause();*/
  }
  $scope.resetTimer = function(){
    $scope.disabled = false;
    $scope.timeLeft = 10;
  }
  
  }]);

// Break Controller

TimerApp.controller('BreakCtrl', ['$scope', '$interval', function($scope, $interval){
console.log('BreakCtrl');
 
  $scope.timeLeft = 50;  
  $scope.timeStart = function(){
  $scope.disabled = true;
    time = $interval(function(){
      $scope.timeLeft--;
      if($scope.timeLeft === 0){
        $interval.cancel(time);
        /*sound.play();*/
      }
    }, 1000 );
  };  
  
  $scope.stopTimer = function(){
    $scope.disabled = false;
    $interval.cancel(time);
    /*sound.pause();*/
  }
  $scope.resetTimer = function(){
    $scope.disabled = false;
    $scope.timeLeft = 10;
  }
  
  }]);
