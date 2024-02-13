import DeviceInfo from 'react-native-device-info';

const shadowAndroid = {
  shadowColor: 'rgba(17,43,85,0.45)',
  elevation: 5,
  backgroundColor: '#ffffff',
};

const shadowiOS = {
  shadowColor: 'rgba(17,43,85,0.1)',
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 1,
  shadowRadius: 3,
  backgroundColor: '#ffffff',
};

const oldShadow = {
  shadowColor: '#0E2B59',
  elevation: 4,
  backgroundColor: '#ffffff',
};

const drawerAndroid = {
  shadowColor: 'black',
  elevation: 10,
  backgroundColor: '#fff',
};

const borderShadowAndroid = {
  borderWidth: 1,
  borderColor: 'rgba(17,43,85,0.03)',
};

const borderShadowiOS = {
  borderWidth: 1,
  borderColor: 'rgba(17,43,85,0.03)',
};

const barShadowAndroid = {
  shadowColor: 'rgba(17,43,85,0.45)',
  elevation: 50,
};

const shadowDeferrer = (iOS, newAndroid, oldAndroid) => {
  const os = DeviceInfo.getSystemName();
  const version = DeviceInfo.getSystemVersion();
  if (os === 'iOS' || os === 'iPhone OS') return iOS;
  if (version >= 9) return newAndroid;
  return oldAndroid;
};

const Colors = {
  PrimaryText: '#061c3f',
  SecondaryText: '#486683',
  PrimaryBlue: '#007DBA',
  PrimaryLightBlue: '#A9DEF2',
  SecondaryLightBlue: '#cceffc',
  PrimaryGreen: '#0db14b',
  PrimaryLightGreen: '#BCECCD',
  SecondaryLightGreen: '#dbf4e4',
  PrimaryOrange: '#f58220',
  PrimaryLightOrange: '#FFDABA',
  SecondaryLightOrange: '#fde6d2',
  PrimaryPurple: '#5644b7',
  PrimaryLightPurple: '#DED8F7',
  SecondaryLightPurple: '#e6e3f4',
  PrimaryRed: '#f45555',
  PrimaryLightRed: '#FFC1C1',
  SecondaryLightRed: '#f7d0d0',
  NotificationYellow: '#f3b247',
  IconsGreen: '#a5f1e1',
  White: '#ffffff',
  ValidationText: '#d31715',
  PrimaryGray: '#A3B2C1',
  LightGrayDisableText: '#D1D7DD',
  GrayBlur: '#EFEFEF',
  LightGray: '#F9FAFA',
  SwitchOffGray: '#D9D9D9',
  CreamLightGray: '#F5FAFC',
  LightBlue: '#EFFAFE',
  DirtyGray: 'rgba(229,229,234,.82)',
  BlueWhite: '#F4FAFC',
  SimpleGrey: '#F4F6F8',
  Lime: '#CDDC39',
  LimeLight: '#E3E9A3',
  PurpleDark: '#9C27B0',
  PurpleDarkLight: '#EFD3F3',
  OrangeDark: '#FF5722',
  OrangeDarkLight: '#FFD7D3',
  Pink: '#E91E63',
  PinkLight: '#FFCDDE',
  Teal: '#009688',
  TealLight: '#BBEDF4',
  SecondaryLime: '#F0F4C3',
  SecondaryPurpleDark: '#F3E5F5',
  SecondaryOrangeDark: '#FBE9E7',
  SecondaryPink: '#FCE4EC',
  SecondaryTeal: '#E0F7FA',
  IndiGreen: '#A5F1E1',
  BorderLightBlue: '#B9E3F2',
  ToggleBarGrey: '#d7e2e9',
  MainDividerLight: '#e9ecef',
  BottomDividerLight: '#E9F0F7',
  BorderBlue: '#99CBE3',
  SimpleTeal: '#044552',
  SimpleBackgroundGrey: '#f9f9f9',
  SimpleLightTeal: '#00667D',
  SimpleCyan: '#17A1BA',
  Shadow: shadowDeferrer(shadowiOS, shadowAndroid, oldShadow),
  drawerShadow: shadowDeferrer(shadowiOS, drawerAndroid, drawerAndroid),
  borderShadow: shadowDeferrer(
    borderShadowiOS,
    borderShadowAndroid,
    borderShadowAndroid,
  ),
  barShadow: shadowDeferrer(shadowiOS, barShadowAndroid, oldShadow),
};
export default Colors;
