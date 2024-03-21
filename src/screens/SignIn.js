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
import React, {useEffect} from 'react';
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

import {useForm, Controller} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser, loginUserWithGoogle} from '../../store/authAction';
import Colors from '../common/Colors';
import VerticalSpace from '../common/VerticalSpace';
import {SvgUri} from 'react-native-svg';
import InputField from '../common/InputField';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {setUser, setUserError} from '../../store/authReducer';
import SocialMedia from '../common/SocialMedia';

const SignIn = ({navigation}) => {
  const userError = useSelector(state => state.authReducer.userError);
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
  const onSubmit = (userCredential, e) => {
    e.preventDefault();
    dispatch(loginUser(userCredential));
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '245927281150-t9nakomt41jgn0mtkomdcvfphobtk42a.apps.googleusercontent.com',
    });
  }, []);

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
            height: hp2dp(35),
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
                  icon={'https://www.svgrepo.com/show/445942/password-lock.svg'}
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
                  <Text style={styles.text}>Login</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            {userError && (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <SvgUri
                  style={{
                    marginHorizontal: 5,
                  }}
                  width={wp2dp(5)}
                  height={hp2dp(5)}
                  uri={'https://www.svgrepo.com/show/503021/error.svg'}
                />
                <Text
                  style={{
                    color: Colors.PrimaryRed,
                    fontWeight: '700',
                    fontSize: 15,
                    fontStyle: 'italic',
                  }}>
                  {userError}
                </Text>
              </View>
            )}
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: hp2dp(4),
            alignSelf: 'flex-end',
          }}>
          <Text>Don't hava an account yet? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{textDecorationLine: 'underline'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
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

export default SignIn;
