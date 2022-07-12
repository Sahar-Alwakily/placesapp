import React, { useState } from 'react';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './Screens/LogIn';
import SignUp from './Screens/SignUp';
import Favorite from './Screens/Favorite';
import Notification from './Screens/Notification';
import ChooseLocation from './Screens/ChooseLocation';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Camera from './Screens/Camera';
import AddLocation from './Screens/AddLocation';
import Track from './Screens/Track';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabBar() {

  return ( 
  <Tab.Navigator>
    <Tab.Screen name='Places' component={Home}
      options={{
        tabBarLabel: 'Home',
        headerShown:false,
        tabBarIcon: ({  size }) => (
          <Icon name="home" color='black' size={size} />
        ),
      }}
    ></Tab.Screen>
    <Tab.Screen name='Profile Page' component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ size }) => (
          <Icon name="person" color="black" size={size} />
        ),
      }}
    />
    <Tab.Screen name='Favorite' component={Favorite}
     options={{
      tabBarLabel: 'Favorite',
      tabBarIcon: ({ size }) => (
        <Icon name="star" color="black" size={size} />
      ),
    }}
    
    />

<Tab.Screen name='Track' component={Track}
     options={{
      tabBarLabel: 'Track',
      tabBarIcon: ({ size }) => (
        <Icon name="star" color="black" size={size} />
      ),
    }}
    
    />
     <Tab.Screen name='notification' component={Notification}
      options={{
        tabBarLabel: 'Notification',
        tabBarIcon: ({ size }) => (
          <Icon name="notifications" color="black" size={size} />
        ),
      }}
    />

  </Tab.Navigator>
  )
}


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn} options={{headerShown:false}} ></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp} ></Stack.Screen>
        <Stack.Screen name="Camera" component={Camera}></Stack.Screen>
        <Stack.Screen name="Profile" component={TabBar}></Stack.Screen>
        <Stack.Screen name="ChooseLocation" component={ChooseLocation}></Stack.Screen>
        <Stack.Screen name="AddLocation" component={AddLocation}></Stack.Screen>


        <Stack.Screen name="Home" component={TabBar}  options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Favorite" component={TabBar} />
        <Stack.Screen name="Notification" component={TabBar} />
        <Stack.Screen name="Track" component={TabBar} />

      </Stack.Navigator>
    </NavigationContainer>

  );


}

