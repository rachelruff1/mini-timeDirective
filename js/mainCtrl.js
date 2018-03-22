angular.module("app").controller("mainCtrl", function($scope) {
  $scope.name = "Rachel";
  $scope.time = new Date().toString();
  $scope.startTime = function() {
    $interval(() => {
      $scope.time = new Date().toString();
    }, 1000);
  };
});
