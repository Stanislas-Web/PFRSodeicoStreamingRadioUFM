import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Search from '../components/Search';
import Favoris from '../components/Favoris.jsx';
import Profile from '../components/Profile';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
        name="Accueil" 
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="home" size={23} color={color} />
            
          ),
        }} 
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        }}
        />
        <Tab.Screen 
        name="Favoris" 
        component={Favoris}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite-border" size={24} color="#c4C4C4" />
          ),
        }} 
         />
        <Tab.Screen 
        name="Recherche" 
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="search" size={24} color="#c4C4C4" />
          ),
        }} 
         />
        <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={24} color="#c4C4C4" />
          ),
        }} 
         />
         
      </Tab.Navigator>
    </NavigationContainer>
  );
}