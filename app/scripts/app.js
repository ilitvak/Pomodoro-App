sound = new buzz.sound('https://dl.dropboxusercontent.com/s/tyyr2q2sr6hz2zn/Every%20Day%20I%27m%20Hustlin%27%20-%20Rick%20Ross%20%28Remix_soundcloud_3524009.mp3?dl=0', {
  formats: ["mp3"],
  preload: true
}); 

var TimerApp = angular.module('TimerApp', ['ui.router']);

TimerApp.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
    });  
  
  $stateProvider.state('longbreak', {
    url: '/longbreak',
    controller: 'ChillCtrl',
    templateUrl: '/templates/longbreak.html'
    });


  $stateProvider.state('work', {
    url: '/work',
    controller: 'WorkCtrl',
    templateUrl: '/templates/work.html'
    });


  $stateProvider.state('break', {
    url: '/break',
    controller: 'BreakCtrl',
    templateUrl: '/templates/break.html'
    }); 
  

}]);

// Work Controller 

TimerApp.controller('WorkCtrl', ['$scope', '$interval', function($scope, $interval){
console.log('WorkCtrl');
 
  $scope.timeLeft = 1500;
  $scope.timeStart = function(){
  $scope.disabled = true;
    time = $interval(function(){
      $scope.timeLeft--;
      if($scope.timeLeft === 0){
        $interval.cancel(time);
        sound.play();
      }
    }, 1000 );
  };  
  
  $scope.stopTimer = function(){
    $scope.disabled = false;
    $interval.cancel(time);
    sound.pause();
  }
  $scope.resetTimer = function(){
    $scope.disabled = false;
    $scope.timeLeft = 1500;
  }
  
  }]);

// Break Controller

TimerApp.controller('BreakCtrl', ['$scope', '$interval', function($scope, $interval){
console.log('BreakCtrl');
 
  $scope.timeLeft = 300;  
  $scope.timeStart = function(){
  $scope.disabled = true;
    time = $interval(function(){
      $scope.timeLeft--;
      if($scope.timeLeft === 0){
        $interval.cancel(time);
        sound.play();
      }
    }, 1000 );
  };  
  
  $scope.stopTimer = function(){
    $scope.disabled = false;
    $interval.cancel(time);
    sound.pause();
  }
  $scope.resetTimer = function(){
    $scope.disabled = false;
    $scope.timeLeft = 300;
  }
  
  }]);

// Seperating Controller to be more organized // long break Ctrl
TimerApp.controller('ChillCtrl', ['$scope', '$interval', function($scope, $interval){
console.log('ChillCtrl');
 
  $scope.timeLeft = 600;  
  $scope.timeStart = function(){
  $scope.disabled = true;
    time = $interval(function(){
      $scope.timeLeft--;
      if($scope.timeLeft === 0){
        $interval.cancel(time);
        sound.play();
      }
    }, 1000 );
  };  
  
  $scope.stopTimer = function(){
    $scope.disabled = false;
    $interval.cancel(time);
    sound.pause();
  }
  $scope.resetTimer = function(){
    $scope.disabled = false;
    $scope.timeLeft = 600;
  }
  }]);

// Timer app. 
TimerApp.filter('timecode', function(){
   return function(seconds) {
     seconds = Number.parseFloat(seconds);
 
 
     // make it a whole number
     var wholeSeconds = Math.floor(seconds);
 
     var minutes = Math.floor(wholeSeconds / 60);
 
     remainingSeconds = wholeSeconds % 60;
 
     var output = minutes + ':';
 
     // zero pad seconds, so 9 seconds should be :09
     if (remainingSeconds < 10) {
       output += '0';
     }
 
     output += remainingSeconds;
 
     return output;
   }
 })

