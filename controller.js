app.controller('appController',['$scope', 'appFactory', function($scope, appFactory){
  $scope.test = 'Hi there!';
  var friendArray = [];


  $scope.submit = function() {


    // var search = new IOWA.SOR();
    // var criteria = new IOWA.SOR.CRITERIA();

    // criteria.set('city','des moines'); // any item described in the query section may be used
    
    // criteria.limit(10); // records per "page"
    // criteria.page(1); // default is 1, start on any page


    // // execute search, passing the service url, criteria, and a callback funciton
    // search.execute('http://www.iowasexoffenders.com/api/search/results.json',criteria, function (response) {
    //   console.log('JSONP TEST', response);
    //     // response contains full response object as described in the api info page
        
    // });




    $scope.data = $scope.test;
    friendArray = $scope.test.split(', ');
    var correlations = appFactory.processData(friendArray);
    console.log('Are there any matches?????', appFactory.processData(friendArray));
  }

}]);