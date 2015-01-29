var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use('/', router);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/form.html');
});

app.post('/', function (req, res) {
  res.sendFile(__dirname + '/views/form.html');

  var path = req.body.custom_path,
  	  response = req.body.custom_response;

  //clear existing routes
  router.stack = [];

  console.log("Added route for /" + path);

  router.get('/' + path, function (req, res) {
  		res.send(response);
	});
});


var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Nodecho app listening at http://%s:%s', host, port)

});