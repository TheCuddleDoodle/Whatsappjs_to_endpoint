const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
var express = require('express');

//express client
var app = express();

//whatsapp Client
const client = new Client();


var load_message = "";


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});
client.on('message',message => {
    //save the message to json file
    console.log(message.body);
    load_message = message.body;
    
})

app.get('/message', function (req, res) {
    res.send(load_message);
 })



var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })
client.initialize();
