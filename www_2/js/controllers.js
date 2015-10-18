"use strict";

angular.module('myApp.controllers', [])
.controller('mainCtrl',function($scope,$ionicPlatform,$cordovaDevice){
	var _this=this;

// うまく動作しない
//    $ionicPlatform.ready(function() {
//    	_this.model = $cordovaDevice.getModel();
// 		_this.model = 'HELLO';
// 		$scope.$apply();
// 	});

    document.addEventListener("deviceready", function() {
    	_this.model = $cordovaDevice.getModel();
    	$scope.$apply();
      }, false);
})
;
