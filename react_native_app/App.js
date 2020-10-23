import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
import Navigation from './Navigation/Navigation';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  console.disableYellowBox = true;
  return (
    <View style={styles.container}>
      {/* <View style={{height:"40px", backgroundColor:"#f2e307"}}></View> */}
      <Navigation/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
