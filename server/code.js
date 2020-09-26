var Webcast = function(options) {

    var lame = require('lame');
    var audio = require('osx-audio');
    var fs = require('fs');
  
    //create the Encoder instance
    var encoder = new lame.Encoder({
      //input
      channels: 2,        //2 channels (left and right)
      bitDepth: 16,       //16-bit samples
      sampleRate: 44100,  //44,100 Hz sample rate
  
      //output
      bitRate: options.bitrate,
      outSampleRate: options.samplerate,
      mode: (options.mono ? lame.MONO : lame.STEREO) //STEREO (default), JOINTSTEREO, DUALCHANNEL or MONO
    });
  
    var input = new audio.Input();
    input.pipe(encoder);
  
    //set up an express app
    var express = require('express')
    var app = express()
  
    app.get('/stream.mp3', function (req, res) {
      res.set({
        'Content-Type': 'audio/mpeg3',
        'Transfer-Encoding': 'chunked'
      });
      encoder.pipe(res);
    });
  
    var server = app.listen(options.port);
  }
  
  module.exports = Webcast;