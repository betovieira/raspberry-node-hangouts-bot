var Client = require('hangupsjs');
var Q = require('q');
var player = require('play-sound')(opts = {})


// callback to get promise for creds using stdin. this in turn
// means the user must fire up their browser and get the
// requested token.
var creds = function() {
  return {
    auth: Client.authStdin
  };
};

var client = new Client();

// set more verbose logging
client.loglevel('debug');

// receive chat message events
client.on('chat_message', function(ev) {
  return console.log(ev);
});

// Vou colocar comentários, mas deixa pra amanha
client.connect(creds).then(function() {
    return client.sendchatmessage('Ugz6Majfh-Nt7hvAfb94AaABAagBj6inCw',
    [[0, 'ROBOZINHO CONECTADO!']]);
}).done();

client.on('chat_message', function(msg) {
    
    console.log('----------------------');
    var textoRecebido = msg.chat_message.message_content.segment[0].text;
    var remetente = msg.sender_id.chat_id;
    
    console.log(msg.sender_id);
    
    if(remetente == "xxx") {
        player.play('Bike-ring-bell.mp3', function(err){}) // $ mplayer foo.mp3  

    }else {
        console.log("NAO E O CARA IMPORTANTE");
    }
    
    console.log('----------------------');

  return console.log(msg);
});
