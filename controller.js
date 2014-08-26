app.controller('appController',['$scope', 'appFactory', function($scope, appFactory){
  $scope.input = 'Hi there!';

  $scope.resultsArr = [];

  $scope.submit = function() {

    $scope.data = $scope.input;
    friendArray = $scope.input.split(', ');
    appFactory.processData(friendArray, function(response){
      console.log('This works!', response);
      if(response.results !== 0){
        $scope.resultsArr.push(response);
      }
      $scope.$apply();
      console.log('RESULTS', $scope.resultsArr);
    });

  };

}]);