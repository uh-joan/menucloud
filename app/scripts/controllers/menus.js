'use strict';

angular.module('testApp')
  .controller('MenusCtrl', function ($scope, User){//}, $http) {

    $scope.tempUser = User.get();
  });
