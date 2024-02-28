import React from 'react';
import {useColorScheme} from 'react-native';
import 'react-native-gesture-handler';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainNavigation from './src/navigation/MainNavigation';
import {store} from './store';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Loader from './src/common/Loader';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <MainNavigation></MainNavigation>
      <Loader />
    </Provider>
  );
};

export default App;
