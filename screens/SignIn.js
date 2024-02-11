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
import {useForm, Controller} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {loginUser} from '../store/authAction';

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
              <TextInput
                placeholder="First name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
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
