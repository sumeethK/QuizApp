'use strict';

/**
 * @ngdoc function
 * @name nodeAppApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the nodeAppApp
 */
angular.module('nodeAppApp')
  .controller('QuizCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    var host = "http://localhost:8026/";
    $http.get(host + 'quiz/getAllQuestion', {cache: true}).success(function (data, status, headers, config) {
      $scope.quizMetaData = data;
      $scope.questionList = data.questionList;
      console.log($scope.questionList);
    }).error(function (data, status, headers, config) {
      $scope.serviceMessage = "Error in connection with UIService.Status : " + status;
      $scope.connectionDetails = config.url;
    });

  }]);
