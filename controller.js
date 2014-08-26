app.controller('appController',['$scope', 'appFactory', function($scope, appFactory){
  $scope.test = 'Hi there!';
  var friendArray = [];
  $scope.submit = function() {
    $scope.data = $scope.test;
    friendArray = $scope.test.split(', ');
    var correlations = appFactory.processData(friendArray);
    console.log('Are there any matches?', correlations);
  }

}]);