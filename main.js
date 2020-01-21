var express = require('express');
var cors = require('cors');
var logger = require('morgan');

var app = express();
var port = process.env.PORT || 12345

app.use(logger('common'));

// define your origins
// { origin: 'http://example.com' }
app.use(cors());

app.use(express.static(__dirname + '/static'));

app.listen(port, () => {
  console.log('Server litening at: ' + port);
});
