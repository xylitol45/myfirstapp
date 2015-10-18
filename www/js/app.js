"use strict";

angular.module('myApp', ['ionic','ngCordova','myApp.controllers'])

.run(function($ionicPlatform, $cordovaStatusbar) {	

	document.addEventListener("deviceready", function() {
      $cordovaStatusbar.overlaysWebView(true);
   }, false);

// どうもうまく動作しない
//  $ionicPlatform.ready(function() {
//    if(window.cordova && window.cordova.plugins.Keyboard) {
//      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//    }
//    if(window.StatusBar) {
//      StatusBar.styleDefault();
//    }
//  });
})
;

