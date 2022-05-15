const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
var express = require('express');

//express client
var app = express();

//whatsapp Client
const client = new Client();


var load_message = {
    "from": from,
    "body": body
  }


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
    res.send(load_message);
 })



var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })
client.initialize();
