var express = require('express');
var app = express();
app.use(express.static(__dirname + '/src'));
app.listen(7215, function() {
  console.log('Listening in on port 7215');
})
