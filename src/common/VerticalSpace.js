import React, {useContext} from 'react';
import {View, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
// import {FontScaleContext} from '../../Context';

const windowHeight = Dimensions.get('window').height;

const VerticalSpace = ({height}) => {
  return <View style={{height: height * windowHeight}} />;
};

VerticalSpace.propTypes = {
  height: PropTypes.number.isRequired,
};

export default VerticalSpace;
