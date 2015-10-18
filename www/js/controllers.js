"use strict";

angular.module('myApp.controllers', [])
.controller('mainCtrl',function($scope,$ionicPlatform){
	var _this=this;
//	_this.token = 'GO';
//	$scope.token = 'WO';
    $ionicPlatform.ready(function() {
		 //_this.token = $cordovaDevice.getUUID();
// 		_this.token = 'HELLO';
// 		$scope.$apply();
 	});
    
    
    document.addEventListener("deviceready", function() {
    	_this.model = $cordovaDevice.getModel();
    	$scope.$apply();
      }, false);
})
;
