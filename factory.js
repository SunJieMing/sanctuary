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

  // var params = {
  //   pageNr: 1,
  //   pageSize: 5,
  //   enqueteId: "foo",
  //   sortColumn: "undefined",
  //   sortDirection: "undefined"
  // };

  var apiQuery = function(query){


    // return $resource(query, {}, {
    //   fetch: {
    //     method: 'JSONP',
    //     params: params,
    //     headers: {
    //       'Accept': 'application/json, text/javascript',
    //       'Content-Type': 'application/json; charset=utf-8'
    //     },
    //     isArray: false,
    //     callback: 'JSON_CALLBACK'
    //   }
    // });


var search = new IOWA.SOR();
var criteria = new IOWA.SOR.CRITERIA();

criteria.set('city','des moines'); // any item described in the query section may be used

criteria.limit(10); // records per "page"
criteria.page(1); // default is 1, start on any page


// execute search, passing the service url, criteria, and a callback funciton
search.execute('http://www.iowasexoffenders.com/api/search/results.json',criteria, function (response) {
  console.log('JSONP TEST', response);
    // response contains full response object as described in the api info page
    
});

return response;


    // return $http({
    //   method: 'GET',
    //   dataType: 'JSONP',
    //   url: query,
    //   headers: {
    //     'Accept': 'application/json, text/javascript',
    //     'Content-Type': 'application/json; charset=utf-8'
    //   },
    //   jsonp: 'jsonp_callback'
    // }).results;
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