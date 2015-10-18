"use strict";

angular.module('myApp', ['ionic','ngCordova','myApp.controllers'])

.run(function($ionicPlatform, $cordovaStatusbar) {	
	document.addEventListener("deviceready", function() {
      //$cordovaStatusbar.overlaysWebView(true);
   }, false);

// どうもうまく動作しない
//  $ionicPlatform.ready(function() {
//  });
	ionic.Platform.ready(function(){
	    $cordovaStatusbar.overlaysWebView(true);
	 });

})
;

