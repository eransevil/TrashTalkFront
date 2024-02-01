import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import SecondScreen from '../screens/SecondScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

const MainTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          console.log('route.name', route.name);

          if (route.name === 'SecondScreen') {
            iconName = focused ? 'rocket' : 'rocket';
          } else if (route.name === 'HomePage') {
            iconName = focused ? 'home' : 'home';
            // return <Icon name="home" size={30} color="#900" />;
          }
          console.log('iconName', iconName);
          return <Icon name={iconName} size={30} color="#900" />;

          // You can return any component that you like here!
          //   return <Icon name="home" size={30} color="#900" />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="HomePage" component={HomePage} />
      <Tab.Screen name="SecondScreen" component={SecondScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigation;
