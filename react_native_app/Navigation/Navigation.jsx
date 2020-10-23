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
import { Feather } from '@expo/vector-icons';


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
            zIndex: 8 ,
            
         }
        }}
      >

        <Tab.Screen
        name="Accueil" 
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="home" size={focused?25:18}  color={focused?"#000":"#474747"} />
            
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
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="favorite-border" size={focused?25:18}  color={focused?"#000":"#474747"} />
          ),
        }} 
         />
        <Tab.Screen 
        name="Recherche" 
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Octicons name="search" size={focused?25:18}  color={focused?"#000":"#474747"} />
          ),
        }} 
         />
        <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="user" size={focused?25:18}  color={focused?"#000":"#474747"} />
          ),
        }} 
         />
      </Tab.Navigator>
       
      
    </NavigationContainer>
  );
}