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
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

import {useForm, Controller} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../store/authAction';
import Colors from '../common/Colors';
import VerticalSpace from '../common/VerticalSpace';

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
      <View
        style={{
          width: wp2dp(80),
          alignSelf: 'center',
          alignItems: 'flex-start',
        }}>
        <VerticalSpace height={0.05} />
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          Login
        </Text>
        <VerticalSpace height={0.05} />

        <View
          style={{
            height: hp2dp(40),
            width: wp2dp(80),
            alignItems: 'flex-start',
            alignSelf: 'center',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 300,
            }}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <View style={{width: wp2dp(80)}}>
                  <Text style={{color: Colors.PrimaryText}}>username</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      paddingVertical: wp2dp(3),
                      borderColor: Colors.PrimaryGray,
                    }}>
                    <Image
                      style={{width: 15, height: 15, marginRight: 10}}
                      source={{
                        uri: `https://as2.ftcdn.net/v2/jpg/03/73/50/09/1000_F_373500999_wAWkzJZRb2XHm9KeHEDcCJBkx4wR67us.jpg`,
                      }}
                    />
                    <TextInput
                      // style={{
                      //   borderBottomWidth: 1,
                      //   padding: wp2dp(3),
                      //   borderColor: Colors.PrimaryGray,
                      // }}
                      placeholder="Type your username"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </View>
                </View>
              )}
              name="username"
            />
            {errors.username && (
              <Text style={{color: Colors.PrimaryRed, fontSize: 10}}>
                This is required.
              </Text>
            )}
            <VerticalSpace height={0.05} />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <View style={{width: wp2dp(80)}}>
                  <Text style={{color: Colors.PrimaryText}}>password</Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: wp2dp(80),
                      borderBottomWidth: 1,
                      paddingVertical: wp2dp(3),
                      borderColor: Colors.PrimaryGray,
                    }}>
                    <Image
                      style={{width: 15, height: 15, marginRight: 10}}
                      source={{
                        uri: `https://as2.ftcdn.net/v2/jpg/03/73/50/09/1000_F_373500999_wAWkzJZRb2XHm9KeHEDcCJBkx4wR67us.jpg`,
                      }}
                    />

                    <TextInput
                      placeholder="Type your password"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      secureTextEntry={true}
                    />
                  </View>
                </View>
              )}
              name="password"
            />

            <View style={styles.container}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit(onSubmit)}>
                <LinearGradient
                  end={{x: 1, y: 1}}
                  colors={['#63b9cb', '#ea84ff', '#b111b4']}
                  style={styles.gradient}>
                  <Text style={styles.text}>Login</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Button
          title="Didnt Have an account? SignIn"
          onPress={() => navigation.navigate('SignUp')}></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  button: {
    width: wp2dp('80'),
    height: 45,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignIn;
