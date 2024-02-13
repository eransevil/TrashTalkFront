import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage';
import SecondScreen from '../screens/SecondScreen';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const MaInStackNavigation = () => {
  const Stack = createNativeStackNavigator();

  const isLoggedIn = false;

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
      }}>
      {isLoggedIn ? (
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="SecondScreen" component={SecondScreen} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default MaInStackNavigation;
