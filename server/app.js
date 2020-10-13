    const lame = require("node-lame").Lame;
    // const audio = require('osx-audio');
    const fs = require('fs');
    const PORT = (process.env.PORT || 5000);
  
    //create the Encoder instance
    const encoder = new lame({
      output: "./audio-files/demo.mp3",
      bitrate: 192
  }).setFile("./audio-files/demo.wav");
  
  
    const input = new audio.Input();
    input.pipe(encoder);
  
    //set up an express app
    const express = require('express')
    const app = express()
  
    app.get('/stream.mp3', function (req, res) {
      res.set({
        'Content-Type': 'audio/mpeg3',
        'Transfer-Encoding': 'chunked'
      });
      encoder.pipe(res);
    });

    app.listen(PORT, ()=>{
        console.log(`le serveur écoute sur le port : ${PORT}`);
    })
  