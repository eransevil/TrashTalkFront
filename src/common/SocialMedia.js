import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';

const SocialMedia = ({onGooglePress}) => {
  return (
    <View>
      <Text style={styles.title}>OR</Text>
      <View style={styles.container}>
        <TouchableOpacity onPress={onGooglePress}>
          <SvgUri
            style={{
              marginHorizontal: 5,
            }}
            width={wp2dp(8)}
            height={hp2dp(8)}
            uri={'https://www.svgrepo.com/show/475656/google-color.svg'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onGooglePress}>
          <SvgUri
            style={{
              marginHorizontal: 5,
            }}
            width={wp2dp(8)}
            height={hp2dp(8)}
            uri={'https://www.svgrepo.com/show/303110/apple-black-logo.svg'}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={onGooglePress}>
        <SvgUri
          style={{
            marginHorizontal: 5,
          }}
          width={wp2dp(5)}
          height={hp2dp(5)}
          uri={'https://www.svgrepo.com/show/503021/error.svg'}
        />
      </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: wp2dp(30),
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default SocialMedia;
