"use strict";

angular.module('myApp.controllers', [])
.controller('mainCtrl',function($scope,$ionicPlatform,$cordovaStatusbar,$cordovaDevice){
	
	var _this=this;
//	_this.token = 'GO';
//	$scope.token = 'WO';
	  
	$ionicPlatform.ready(function() {
		 //_this.token = $cordovaDevice.getUUID();
//		$cordovaStatusbar.overlaysWebView(true);
//		  $cordovaStatusbar.show();
// 		_this.token = 'HELLO';
// 		$scope.$apply();
		_this.token = $cordovaDevice.getUUID() + " OK!!";
 		$scope.$apply();
 	});
    
    
    document.addEventListener("deviceready", function() {
//    	$scope.$apply();
//		$cordovaStatusbar.overlaysWebView(true);
//		$cordovaStatusbar.show();
//    	_this.token = "HH";
//    	_this.token = $cordovaDevice.getPlatform();
//    	_this.token = $cordovaDevice.getUUID();
    	$scope.$apply();
      }, false);
})
;
