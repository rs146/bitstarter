var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    fs.readFileSync('index.html', 'utf-8', function(err, data) {
      var buf = new Buffer(data, 'utf-8');
      response.send(buf.toString());
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
