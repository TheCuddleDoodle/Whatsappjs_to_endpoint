const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
var express = require('express');

//express client
var app = express();
app.set('port', (process.env.PORT || 5000))
//whatsapp Client
const client = new Client();


// var heroku = " dosb.oi80.3@gmail.com";


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message',message => {
    //save the message to json file
    load_message.body = message.body;
    load_message.from = message.from;
    console.log(load_message);   
})

app.get('/message', function (req, res) {
    res.json(load_message);
 })



var server = app.listen(app.get('port'), function () {
    var host = server.address().address
    console.log("Node app is running at localhost:"+host + app.get('port'))
 })
client.initialize();
