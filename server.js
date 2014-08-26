var hobbies = {"Hobbies":
["Soccer","Martial Arts","Paintball","Reading","Cooking"]};

var occupations = {"Occupations":
["Carpet Installer","Missionary","Martial Arts Instructor","Sourcing Assistant","MTC Teacher", "Self-Employed"]};

var latest = occupations.Occupations[occupations.Occupations.length - 1];

var mentions = {"Mentions":["www.facebook.com","www.bbc.com"]};

var friends = {"Friends":["Shay","Connor","Scott","Brandon","Tyler","Michael"]};

var skills = [
{
  id: 1,
  name: 'Mandarin',
  experience: 'Advanced'
},
{
  id: 2,
  name: 'Javascript',
  experience: 'Intermediate'
},
{
  id: 3,
  name: 'Cooking',
  experience: 'Intermediate'
}
];

var bodyParser = require('body-parser');
var express = require('express');

var app = express();
app.use(bodyParser());


app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/name', function(req, res){
  res.send({"Name":"Samuel Benjamin Nelson"});
});

app.get('/hobbies', function(req, res){

  if(req.query.order === "asc"){
    res.send(hobbies.Hobbies.sort());
  }
  else if(req.query.order === "dsc"){
    res.send(hobbies.Hobbies.reverse());
  }
  else{
    res.send(hobbies);
  }
});

app.get('/location', function(req, res){
  res.send({"Location":"Kaysville, UT"});
});

app.get('/occupations', function(req, res){
  if(req.query.order === "asc"){
    res.send(occupations.Occupations.sort());
  }
  else if(req.query.order === "dsc"){
    res.send(occupations.Occupations.reverse());
  }
  else{
    res.send(occupations);
  }
});

app.get('/occupations/latest', function(req, res){
  res.send({"Occupations": latest});
});

app.post('/mentions', function(req, res){
 mentions.Mentions.push(req.body.theData);
 res.send(mentions);
});
app.get('/mentions', function(req, res){
  res.send(mentions);
});

app.post('/friends', function(req, res){
 friends.Friends.push(req.body.theData);
 res.send(friends);
});
app.get('/friends', function(req, res){
  res.send(friends);
});

app.get('/skills', function(req, res){
  res.send(skills);
});

app.get('/skills/:id', function(req, res){
  var myID = req.params.id;

  for(var i = 0; i < skills.length; i++){
    if(skills[i].id == myID){
      res.send(skills[i]);
    }
  }
});

app.post('/skills', function(req, res){
  var newObj = {};
  newObj.id = req.body.id;
  newObj.name = req.body.name;
  newObj.experience = req.body.experience;
  skills.push(newObj);
  res.send(skills);
});

app.put('/skills/:id', function(req, res){

 var myID = req.params.id;

 for(var i = 0; i < skills.length; i++){
  if(skills[i].id == myID){
    skills[i].name = req.body.name;
    skills[i].experience = req.body.experience;
  }
}
res.send(skills);
});

app.delete('/skills/:id', function(req, res){

  var myID = req.params.id;
  for(var i = 0; i < skills.length; i++){
    if(skills[i].id == myID){
      skills.splice(i,1);
    }
  }
  res.send(skills);
});

app.listen(3000);
