import {View, Text, SafeAreaView, StatusBar, Button} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementByAmount} from '../../store/authReducer';

const HomePage = ({navigation}) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(state => state.authReducer.loggedInUser);

  console.log('loggedInUser', loggedInUser);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
      }}>
      <Text> Welcome back {loggedInUser?.name}</Text>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomePage;
