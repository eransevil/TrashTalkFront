import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp2dp,
  widthPercentageToDP as wp2dp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SvgUri} from 'react-native-svg';
import Colors from './Colors';
import {DrawerActions, useRoute} from '@react-navigation/native';

const Header = ({navigation}) => {
  const route = useRoute();

  return (
    <SafeAreaView style={{backgroundColor: Colors.MainDividerLight}}>
      <View
        style={{
          height: hp2dp(6),
          backgroundColor: Colors.MainDividerLight,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <SvgUri
            style={{
              marginHorizontal: 5,
            }}
            width={wp2dp(5)}
            height={hp2dp(5)}
            uri={'https://www.svgrepo.com/show/532195/menu.svg'}
          />
        </TouchableOpacity>
        <Text
          style={{
            width: wp2dp('26'),
          }}>
          {route.name}
        </Text>
        <Text></Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
