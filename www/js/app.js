"use strict";

angular.module('myApp', ['ionic','ngCordova','myApp.controllers'])

.run(function($ionicPlatform, $cordovaStatusbar) {	
    document.addEventListener("deviceready", function() {
//    if(window.cordova && window.cordova.plugins.Keyboard) {
//      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//    }
//    if(window.StatusBar) {
//      StatusBar.styleDefault();
//    }
      //$cordovaStatusbar.overlaysWebView(true);

   }, false);
//   $cordovaStatusbar.overlaysWebView(true);

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

