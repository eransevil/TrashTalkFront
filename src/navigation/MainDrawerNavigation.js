import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePage from '../screens/HomePage';
import SecondScreen from '../screens/SecondScreen';
import {UseSelector, useSelector} from 'react-redux';
import SignIn from '../screens/SignIn';

const MainDrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  const loggedInUser = useSelector(state => state.authReducer.loggedInUser);

  return (
    <Drawer.Navigator
      initialRouteName="HomePage"
      screenOptions={{headerShown: loggedInUser ? true : false}}>
      {loggedInUser ? (
        <Drawer.Group>
          <Drawer.Screen name="HomePage" component={HomePage} />
          <Drawer.Screen name="SecondScreen" component={SecondScreen} />
        </Drawer.Group>
      ) : (
        <Drawer.Group>
          <Drawer.Screen name="SignIn" component={SignIn} />
        </Drawer.Group>
      )}
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigation;
