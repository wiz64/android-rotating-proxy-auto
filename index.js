const express = require('express');
const app = express();
var sData = "ok";
app.get('/', function(req, res) {
     res.send(sData);
    });
app.get('/ask', function(req,res) {
    sData = 'asked';
    res.send(sData);
});
app.get('/grant',function(req,res) {
    sData = 'granted';
    res.send(sData)
});
app.get('/accept',function(req,res) {
    sData = 'accepted';
    res.send(sData)
});
app.get('/ok',function(req,res) {
    sData = 'ok';
    res.send(sData)
});

app.listen(3000, () => console.log('IP Rotating middleware server listening on port 3000!'));