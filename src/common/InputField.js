import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';
import {SvgUri} from 'react-native-svg';
import Colors from './Colors';

const InputField = ({
  onChange,
  onBlur,
  value,
  lable,
  icon,
  placeholder,
  secureTextEntry,
  errors,
}) => {
  return (
    <View style={{width: wp2dp(80)}}>
      <Text style={{color: Colors.PrimaryText}}>{lable}</Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: wp2dp(80),
          borderBottomWidth: 1,
          paddingVertical: wp2dp(3),
          borderColor: Colors.PrimaryGray,
        }}>
        <SvgUri
          style={{
            marginRight: 10,
          }}
          width={wp2dp(4)}
          height={hp2dp(4)}
          uri={icon}
        />
        <TextInput
          placeholder={placeholder}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          secureTextEntry={secureTextEntry}
          ket
        />
      </View>

      {errors?.[lable] && (
        <Text
          style={{
            color: Colors.PrimaryRed,
            fontSize: 11,
            alignSelf: 'flex-start',
          }}>
          This is required.
        </Text>
      )}
    </View>
  );
};

export default InputField;
