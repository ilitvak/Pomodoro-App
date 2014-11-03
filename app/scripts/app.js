/*
sound = new buzz.sound('https://dl.dropboxusercontent.com/s/tyyr2q2sr6hz2zn/Every%20Day%20I%27m%20Hustlin%27%20-%20Rick%20Ross%20%28Remix_soundcloud_3524009.mp3?dl=0', {
  formats: ["mp3"],
  preload: true
}); */

var TimerApp = angular.module('TimerApp', [])
TimerApp.controller('TimerCtrl', ['$scope', '$interval', function($scope, $interval){

 
  $scope.timeLeft = 20;  
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
    $scope.timeLeft = 10;
  }
  
  }]);