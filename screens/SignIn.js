import {View, Text, Button} from 'react-native';
import React from 'react';

const SignIn = ({navigation}) => {
  return (
    <View>
      <Text>SignIn</Text>
      <Button
        title="SignUp"
        onPress={() => navigation.navigate('SignUp')}></Button>
    </View>
  );
};

export default SignIn;
