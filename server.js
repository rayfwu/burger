const express = require('express');
const app = express();
const port = 8000;

var path = require('path');

app.get('/', function(req, res) {
    res.sendFile("Hi");
});

app.listen(port, function() {
    console.log(`Listening on port ${port}.`);
})