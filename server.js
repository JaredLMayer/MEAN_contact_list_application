var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactlist', function (req, res) {
  console.log('I received a GET request');

  person1 = {
  	name: "Tim",
  	email: "tim@tim.com",
  	number: "(111)-111-1111"
  },
  person2 = {
  	name: "Emily",
  	email: "emily@emily.com",
  	number: "(222)-222-2222"
  },
  person3 = {
  	name: "John",
  	email: "John@john.com",
  	number: "(333)-333-3333"
  }

  var contactlist = [person1, person2, person3];
  res.json(contactlist);

});


app.listen(3000, function(){
	console.log("Server running on port 3000");
});