import {View, Text} from 'react-native';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomePage from '../screens/HomePage';
import SecondScreen from '../screens/SecondScreen';
import {useDispatch, useSelector} from 'react-redux';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {logout} from '../../store/authAction';
import {useNavigation, DrawerActions} from '@react-navigation/native';
const MainDrawerNavigation = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const Drawer = createDrawerNavigator();
  const loggedInUser = useSelector(state => state.authReducer.loggedInUser);

  async function handleGoogleLogout() {
    navigation.dispatch(DrawerActions.toggleDrawer());
    try {
      dispatch(logout());
      await GoogleSignin.signOut();
    } catch (error) {
      console.log('Google Sign-Out Error: ', error);
    }
  }

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="logout" onPress={handleGoogleLogout} />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="HomePage"
      screenOptions={{headerShown: loggedInUser ? true : false}}>
      {loggedInUser ? (
        <Drawer.Group>
          <Drawer.Screen name="HomePage" component={HomePage} />
          <Drawer.Screen name="SecondScreen" component={SecondScreen} />
          <Drawer.Screen name="SecondScree2n" component={SecondScreen} />
        </Drawer.Group>
      ) : (
        <Drawer.Group>
          <Drawer.Screen name="SignIn" component={SignIn} />
          <Drawer.Screen name="SignUp" component={SignUp} />
        </Drawer.Group>
      )}
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigation;
