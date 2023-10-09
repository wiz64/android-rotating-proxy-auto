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
var ids = {};
var lastHit = {};
var locks = {};
app.get('/:id/:action',function(req,res) {
    let id = req.params.id;
    if(!ids[id]) {
        ids[id] = "ok";
        lastHit[id] = 'undefined';
        locks[id] = 'unlocked';
    }
    let action = req.params.action;
    if(action == "ask") {
        ids[id] = "asked";
        lastHit[id] = new Date().toISOString()
    }
    if(action == "grant") {
        ids[id] = "granted"
    }
    if(action == "accept") {
        ids[id] = "accepted"
    }
    if(action == "ok") {
        ids[id] = "ok"
    }
    if(action == 'last') {
        if(!lastHit[id]) {lastHit = new Date().toISOString()}
        res.send(lastHit[id])
        return;
    }
    if(action == 'state') {
        res.send(locks[id])
        return
    }
    if(action == 'lock') {
        locks[id] = 'locked'
        res.send(locks[id])
        return
    }
    if(action == 'unlock') {
        locks[id] = 'unlocked'
        res.send(locks[id])
        return
    }
    res.send(ids[id])
    //console.log(ids)
})

app.listen(3000, () => console.log('IP Rotating middleware server listening on port 3000!'));