import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import SecondScreen from '../screens/SecondScreen';
import Header from '../common/Header';

const MainBottomTabNavigation = ({navigation}) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <Header navigation={navigation} />,
      }}>
      <Tab.Screen name="Home page" component={HomePage} />
      <Tab.Screen name="Games tracking" component={SecondScreen} />
      <Tab.Screen name="Friends list" component={SecondScreen} />
      <Tab.Screen name="Statistics" component={SecondScreen} />
      <Tab.Screen name="Setting" component={SecondScreen} />
    </Tab.Navigator>
  );
};

export default MainBottomTabNavigation;
