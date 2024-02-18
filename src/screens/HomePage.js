import {View, Text, SafeAreaView, StatusBar, Button} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementByAmount} from '../../store/authReducer';

const HomePage = ({navigation}) => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.authReducer.value);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text>Home Screen</Text>
      <Button title="add" onPress={() => dispatch(increment())} />
      <Button title="decrement" onPress={() => dispatch(decrement())} />
      <Button
        title="increment By 10"
        onPress={() => dispatch(incrementByAmount(10))}
      />
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('SecondScreen', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
};

export default HomePage;
