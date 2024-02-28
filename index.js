import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import {initializeApp, firebase} from '@react-native-firebase/app'; // Import initializeApp and firebase
const firebase = require('firebase/app');

// import '@react-native-firebase/auth'; // Import @react-native-firebase/auth for its side effects
// import {getAnalytics} from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAtm4iXEzHcpT1qtF1y696dmYJqXGpAvIQ',
  authDomain: 'trashtalk-bbff9.firebaseapp.com',
  projectId: 'trashtalk-bbff9',
  storageBucket: 'trashtalk-bbff9.appspot.com',
  messagingSenderId: '245927281150',
  appId: '1:245927281150:web:391cd94ef8d1c070bdc0af',
  measurementId: 'G-WL5V98PZSC',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

console.log('Firebase Project Name:', app);

AppRegistry.registerComponent(appName, () => App);
