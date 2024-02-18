import React from 'react';
import {BlurView} from '@react-native-community/blur';

const BlurViewApp = ({hide}) => {
  if (hide) return null;
  return (
    <BlurView
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 0,
      }}
      blurType="light"
      blurAmount={5}
      reducedTransparencyFallbackColor="white"
    />
  );
};

export default BlurViewApp;
