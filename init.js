$(document).ready(function() {
    FB.login(function(response) {
        if (response.status == 'connected') {
            console.log(response);
            var user_id = response.authResponse.userID;
    var page_id = "40796308305"; // coca cola page https://www.facebook.com/cocacola
    var fql_query = "SELECT uid FROM page_fan WHERE page_id=" + page_id + " and uid=" + user_id;

    FB.api('/me/friendlists', function(response){

        debugger;
        console.log('Friend Lists',response.data.length);
        var length = response.data.length;
        for(var i = 0; i < length; i++){
            FB.api('/me/' + response.data[i].id, function(response){
                //console.log(response);
            });
        }


    });

    var friends = FB.api(array(
        "method" : "fql.query",
        "query"  : "SELECT uid,name FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me())"
    ));

    FB.api('/me/permissions', function(response){
        //console.log('/me/permissions/', response);
    })

    FB.api('/me/friends/', function(response){
        console.log('/me/friends/', response);
    });
    FB.api('/me/likes/'+page_id, function(response) {
        if (response.data[0]) {
            $("#container_like").show();
        } else {
            $("#container_notlike").show();
        }
    });
} else {
    // user is not logged in
}


}, {scope: 'read_friendlists'}); 


});