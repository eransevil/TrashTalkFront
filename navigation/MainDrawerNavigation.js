import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePage from '../screens/HomePage';
import SecondScreen from '../screens/SecondScreen';

const MainDrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="HomePage">
      <Drawer.Screen name="HomePage" component={HomePage} />
      <Drawer.Screen name="SecondScreen" component={SecondScreen} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigation;
