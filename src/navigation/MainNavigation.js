import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MaInStackNavigation from './MaInStackNavigation';
import MainTabNavigation from './MainTabNavigation';
import MainDrawerNavigation from './MainDrawerNavigation';

const MainNavigation = () => {
  return (
    <NavigationContainer>
      {/* <MaInStackNavigation></MaInStackNavigation> */}
      {/* <MainTabNavigation></MainTabNavigation> */}
      <MainDrawerNavigation></MainDrawerNavigation>
    </NavigationContainer>
  );
};

export default MainNavigation;
