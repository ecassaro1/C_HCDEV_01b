const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World Backend!!!');
})

app.listen(8080);