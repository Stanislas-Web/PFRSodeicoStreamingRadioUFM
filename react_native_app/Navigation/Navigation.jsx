import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Favoris from '../pages/Favoris.jsx';
import Profile from '../pages/Profile';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import styled from 'styled-components/native';


const Tab = createBottomTabNavigator();

export default function App() {
  const DEVICE_WIDTH = Dimensions.get('window').width;

  return (
    <NavigationContainer>
     
    <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor:"#f2e307",
          inactiveBackgroundColor:"#f2e307",
          activeTintColor: 'black',
          inactiveTintColor: 'black',
          style:{
            borderTopLeftRadius:21, 
            borderTopRightRadius:21,
            backgroundColor:"#f2e307",
            position:'absolute',
            bottom: 0,
            padding:10,
            width: '100%',
            height: 54,
            zIndex: 8 
         }
        }}
      >

        <Tab.Screen
        name="Accueil" 
        component={Home}
        options={{
          tabBarIcon: ({  color }) => (
            <SimpleLineIcons name="home" size={20}  color={color} />
            
          ),
        }} 
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'red',
        }}
        />
        <Tab.Screen 
        name="Favoris" 
        component={Favoris}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite-border" size={24} color={color} />
          ),
        }} 
         />
        <Tab.Screen 
        name="Recherche" 
        component={Search}
        options={{
          tabBarIcon: ({ color}) => (
            <Octicons name="search" size={24} color={color} />
          ),
        }} 
         />
        <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={24} color={color} />
          ),
        }} 
         />
      </Tab.Navigator>
       <View style={{height:"10px", backgroundColor:"#f2e307"}}></View>
      
    </NavigationContainer>
  );
}