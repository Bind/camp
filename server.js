var express = require("express")
var app = express();

app.use(require("body-parser")());
var accountSid = 'ACd2a6616e913e788712bf527c11258412';
var authToken = "f2c70d033bd6ffea1630e7da7c5ea6d2";
var client = require('twilio')(accountSid, authToken);

function textDoug(message){
    client.messages.create({
        body: message,
        to: "+16316034053",
        from: "+17164055434"
    }, function(err, message) {
        //process.stdout.write(message);
    });
}


app.use(express.static(__dirname + '/static'))

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html')
})

app.post('/subscribe', function(req,res){
    data = req.body;
    var text = data.first_name + ' ' + data.last_name + ' just signed up to your newsletter, using ' + data.email; 
    textDoug(text)
    res.send(200)
})


var PORT = process.env.PORT || 30000


var server = app.listen(PORT, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

