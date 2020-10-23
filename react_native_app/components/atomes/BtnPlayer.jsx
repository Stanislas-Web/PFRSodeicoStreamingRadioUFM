// import React from 'react';
// import {Image, View, Text} from 'react-native';
// import styled from 'styled-components/native';
// import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
// import { Ionicons } from '@expo/vector-icons';


 
// export default () => {    
// const url = "http://100radio-albi.ice.infomaniak.ch/100radio-albi-128.mp3";

// const playSound = (url)=>{
//     ReactNativeAudioStreaming.play(url, {showIniOSMediaCenter: true, showInAndroidNotifications: true});
// }
// // ReactNativeAudioStreaming.pause();
// // ReactNativeAudioStreaming.resume();

// // ReactNativeAudioStreaming.stop();
// return(
//     <View>
//         <Ionicons name="md-play-circle" size={60} color="black" onPress={playSound(url)} />

//     </View>  
// )
    
// }


import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={{ marginTop: 70 }}
          onPress={() => {
            this.webview.injectJavaScript(
              'document.getElementById("audio").play();'
            );
          }}
        >
          {/* <Text>Play</Text> */}
   {/* <View> */}
        <Ionicons name="md-play-circle" size={60} color="black" />

   {/* </View>  */}
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 50 }}
          onPress={() => {
            this.webview.injectJavaScript(
              'document.getElementById("audio").pause();'
            );
          }}
        >
          <Text>Pause</Text>
        </TouchableOpacity>
        <WebView
          ref={(ref) => (this.webview = ref)}
          originWhitelist={["*"]}
          mediaPlaybackRequiresUserAction={false} // Allow autoplay
          useWebKit={true}
          source={{
            html:
              '<audio id="audio" loop> <source src="http://100radio-albi.ice.infomaniak.ch/100radio-albi-128.mp3" /> </audio>',
          }}
        />
      </View>
    );
  }
}