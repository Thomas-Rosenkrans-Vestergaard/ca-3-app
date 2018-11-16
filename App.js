import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import FetchScreen from './screens/FetchScreen';

export default createBottomTabNavigator({
  Welcome: {
    screen: WelcomeScreen,
    path: '/welcome'
  },
  Fetch: {
    screen: FetchScreen,
    path: '/fetch'
  },
}, {
  initialRouteName: 'Welcome'
});