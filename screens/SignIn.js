import {
  View,
  Text,
  Button,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {loginUser} from '../store/authAction';
// import Colors from '../src/common/styles/Colors';

const SignIn = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const onSubmit = userCredential => dispatch(loginUser(userCredential));

  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            height: 300,
          }}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <View>
                <Text style={{color: 'gray'}}>username</Text>
                <TextInput
                  style={{
                    borderBottomWidth: 1,
                    padding: wp2dp(3),
                    // borderColor: Colors.LightGray,
                  }}
                  placeholder="Type your username"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="username"
          />
          {errors.username && (
            <Text style={{color: 'red', fontSize: 10}}>This is required.</Text>
          )}

          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder="password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
              />
            )}
            name="password"
          />

          <Button title="Login" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
      <Button
        title="Didnt Have an account? SignIn"
        onPress={() => navigation.navigate('SignUp')}></Button>
    </SafeAreaView>
  );
};
export default SignIn;
