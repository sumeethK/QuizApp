'use strict';

/**
 * @ngdoc function
 * @name nodeAppApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the nodeAppApp
 */
angular.module('nodeAppApp')
  .controller('MoviesCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    var limit = $routeParams.limit;
    var offset = $routeParams.offset;
    var host = "http://localhost:8026/";
    if (limit === "" || limit === null || typeof limit === "undefined") {
      limit = 10;
    }
    if (offset === "" || offset === null || typeof offset === "undefined") {
      offset = 0;
    }
    $http.get(host + 'movies/get/' + limit + "/" + offset, {cache: true}).success(function (data, status, headers, config) {
      $scope.JSONResponse = data;
      $scope.moviesList = $scope.JSONResponse.moviesList;
      console.log($scope.moviesList);
    }).error(function (data, status, headers, config) {
      $scope.serviceMessage = "Error in connection with UIService.Status : " + status;
      $scope.connectionDetails = config.url;
    });

  }]);
