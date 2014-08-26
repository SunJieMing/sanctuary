app.controller('appController', function($scope){
  $scope.test = 'Hi there!';
  var friendArray = [];
  $scope.submit = function() {
    $scope.data = $scope.test;
    friendArray = $scope.test.split(',');
    console.log(friendArray);
  }

});