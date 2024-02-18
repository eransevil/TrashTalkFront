import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Platform, Text, Animated} from 'react-native';
import Spinner from 'react-native-spinkit';
import {useSelector} from 'react-redux';
import {
  heightPercentageToDP as hp2dp,
  widthPercentageToDP as wp2dp,
} from 'react-native-responsive-screen';
import Colors from './Colors';
import BlurViewApp from './BlueViewApp';

const Loader = () => {
  const isLoading = useSelector(state => state.loaderReducer.isLoading);

  return (
    <>
      {isLoading ? (
        <>
          <View style={styles.outerContainer}>
            <BlurViewApp />
            <View style={styles.container}>
              <Spinner
                style={{
                  position: 'relative',
                  zIndex: 11,
                }}
                isVisible
                size={80}
                type="ThreeBounce"
                color={Colors.PrimaryBlue}
              />
            </View>
          </View>
        </>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    top: hp2dp('45%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerContainer: {
    top: 0,
    right: 0,
    width: wp2dp('100%'),
    height: '100%',
    position: 'absolute',
    opacity: 0.6,
  },
});

export default Loader;
