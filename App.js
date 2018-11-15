import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import FetchScreen from './screens/FetchScreen';

export default createBottomTabNavigator({
  Welcome: WelcomeScreen,
  Fetch: FetchScreen,
}, {
  initialRoute: 'Welcome'
});