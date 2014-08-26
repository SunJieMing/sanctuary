app.factory('appFactory', function($http){
  var query = 'http://www.iowasexoffender.com/api/search/results.json?';
  
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
      url: query
    })
  };

  return {
    processData: processData
  };
});