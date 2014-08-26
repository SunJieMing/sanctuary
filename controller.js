app.controller('appController', function($scope){
  $scope.test = 'Hi there!';
  $scope.submit = function() {
    $scope.data = $scope.test;
  }
});