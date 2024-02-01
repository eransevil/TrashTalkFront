import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MaInStackNavigation from './MaInStackNavigation';
import MainTabNavigation from './MainTabNavigation';

const MainNavigation = () => {
  return (
    <NavigationContainer>
      {/* <MaInStackNavigation></MaInStackNavigation> */}
      <MainTabNavigation></MainTabNavigation>
    </NavigationContainer>
  );
};

export default MainNavigation;
