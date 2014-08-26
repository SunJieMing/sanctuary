app.factory('appFactory',['$resource', '$http', function($resource, $http){
  var query = 'http://www.iowasexoffender.com/api/search/results.json?';
  $http.defaults.useXDomain = true;

  var processData = function(friendsArray){
    var resultData = [];
    for(var i = 0; i < friendsArray.length; i++){
      var bothNames = friendsArray[i].split(' ');
      var firstName = bothNames[0];
      var lastName = bothNames[bothNames.length - 1];
      var url = query + 'firstname=' + firstName + '&lastname=' + lastName;
      resultData.push(apiQuery(url));
    }
    return resultData;
  };

  var apiQuery = function(query){
    return $http({
      method: 'GET',
      dataType: 'JSON',
      url: query,
    }).results;
  };

  return {
    processData: processData
  };
}]);

/////TO DO: ADD a server (maybe on Parse.com?) and then refactor my code to be able to make requests to the server.
//This will allow me to get around the cross domain origin request crap.
//I think.
//Maybe there is something else that I can do with the Facebook API.
//Right now it is pretty bare bones but I want to make it work.
//I BETTER doublecheck to make sure that the server is absolutely necessary before I begin writing all that code.
//Get help on this one.