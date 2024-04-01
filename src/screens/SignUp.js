import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import {loginUserWithGoogle, signUpUser} from '../../store/authAction';
import VerticalSpace from '../common/VerticalSpace';
import InputField from '../common/InputField';
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import SocialMedia from '../common/SocialMedia';

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
      email: '',
    },
  });
  const onSubmit = userCredential => dispatch(signUpUser(userCredential));

  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      dispatch(loginUserWithGoogle({idToken}));
      // Sign-in the user with the credential
      auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log('error -->>', error);
    }
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        keyboardShouldPersistTaps="never"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
            Sign up
          </Text>
          <VerticalSpace height={0.05} />

          <View
            style={{
              height: hp2dp(50),
              width: wp2dp(80),
              alignItems: 'flex-start',
              alignSelf: 'center',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: hp2dp(50),
              }}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <View style={{width: wp2dp(80)}}>
                    <InputField
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value}
                      lable={'email'}
                      icon={'https://www.svgrepo.com/show/509283/user.svg'}
                      placeholder={'Type your email'}
                      errors={errors}
                    />
                  </View>
                )}
                name="email"
              />
              <VerticalSpace height={0.05} />
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <View style={{width: wp2dp(80)}}>
                    <InputField
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value}
                      lable={'username'}
                      icon={'https://www.svgrepo.com/show/532362/user.svg'}
                      placeholder={'Type your username'}
                      errors={errors}
                    />
                  </View>
                )}
                name="username"
              />
              <VerticalSpace height={0.05} />
              <Controller
                control={control}
                rules={{
                  required: true,
                  maxLength: 20,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <InputField
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    lable={'password'}
                    icon={
                      'https://www.svgrepo.com/show/445942/password-lock.svg'
                    }
                    placeholder={'Type your password'}
                    secureTextEntry={true}
                    errors={errors}
                  />
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
                    <Text style={styles.text}>Sign up</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: hp2dp(4),
              alignSelf: 'flex-end',
            }}>
            <Text>Don't hava an account yet? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={{textDecorationLine: 'underline'}}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      <SocialMedia onGooglePress={onGoogleButtonPress} />
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
    borderRadius: 30,
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

export default SignUp;
