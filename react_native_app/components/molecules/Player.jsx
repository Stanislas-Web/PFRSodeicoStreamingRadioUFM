import React, { Component } from 'react'
import { Button, View, Text } from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default class RemoteSound extends Component {
//   playTrack = () => {
//     const track = new Sound('https://www.soundjay.com/button/button-1.mp3', null, (e) => {
//       if (e) {
//         console.log('error loading track:', e)
//       } else {
//         track.play()
//       }
//     })
//   }
// http://100radio-albi.ice.infomaniak.ch/100radio-albi-128.mp3
//

  constructor(props)
    {
      super(props);

      this.audioPlayer = new Audio.Sound();
      this.state = {
        isPlaying: false
      }


    }




    

    playSound = async () => {
        try {
          
          const status = {
            shouldPlay: false
          }
    
          // this.setState({isPlaying: true});
          await this.audioPlayer.unloadAsync()
          // await this.audioPlayer.loadAsync(require("./audio.mp3"),status, false);
          await this.audioPlayer.loadAsync({uri:'https://www.radioking.com/play/testradio6'},status, false);
          await this.audioPlayer.playAsync();
          this.setState({isPlaying: true});
          
        } catch (err) {
          console.warn("Couldn't Play audio", err)
        }
    }

    pauseSound = async () => {
      try {
        // await this.audioPlayer.unloadAsync()
        // await this.audioPlayer.loadAsync(require("./audio.mp3"));
        await this.audioPlayer.pauseAsync();
        this.setState({isPlaying: false});
      } catch (err) {
        console.warn("Couldn't Play audio", err)
      }
  }
  // actionButton = () => 

   
    // if (this.state.isPlaying) {
    //   return  <Button  title="play" onPress={this.playSound} />;
    // }else{
    //   return <Button  title="pause" onPress={this.pauseSound} />;
    // }
    // _displayLoading() {
    //   if (this.state.isLoading) {
    //     return (
    //                 <Button  title="play" onPress={this.playSound} />
    //     )
    //   }
    // }
    _displayPlaying() {
      if (this.state.isPlaying ===false) {
        return (
          <Ionicons name="md-play-circle" size={60} color="black" onPress={this.playSound} />
        )
      }else{
        return(
          <MaterialIcons name="pause-circle-filled" size={60} color="black" onPress={this.pauseSound} />
        )

      }
    }
  render() {
    return <View> 
      {this._displayPlaying()}          
      </View>
  }
}
