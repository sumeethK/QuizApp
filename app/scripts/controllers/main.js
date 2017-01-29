'use strict';

/**
 * @ngdoc function
 * @name nodeAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodeAppApp
 */
angular.module('nodeAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Bootstrap'
    ];
  });
