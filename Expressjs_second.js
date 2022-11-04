var express = require('express')
var app = express()
app.get('/WELCOME/', function (req, res) {
res.send('WELCOME TO LBRCE .')
})
app.get('/CSE/', function (req, res) {
res.send('WELCOME TO CSE')
})
app.get('/ECE/', function (req, res) {
res.send('WELCOME TO ECE')
})
app.get('/MECH/', function (req, res) {
res.send('WELCOME TO MECH')
})
app.get('/EEE/', function (req, res) {
res.send('WELCOME TO EEE')
})
app.get('/BYE/',function(req,res){
res.send('GOODBYE')})
var server = app.listen(8000, function(){
console.log('Listening on port 8000...')
})