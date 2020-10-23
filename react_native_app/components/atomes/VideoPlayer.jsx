import React, { Component } from 'react';

import { StyleSheet, View, WebView, Platform } from 'react-native';

export default class App extends Component {

  render() {
    return (

        <View style={{ height: 300 }}>

            <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/YE7VzlLtp-4' }}
            />

        </View>

    );
  }
}

const styles = StyleSheet.create({

WebViewContainer: {

    marginTop: (Platform.OS == 'android') ? 20 : 0,

  }
  
});