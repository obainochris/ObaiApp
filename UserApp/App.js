/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 
 import 'react-native-gesture-handler';
 
 
 import react, {useEffect} from 'react';
 import {StatusBar, PermissionsAndroid, Platform} from 'react-native';
 import Geolocation from '@react-native-community/geolocation';

 import { withAuthenticator } from 'aws-amplify-react-native'

 import Router from './src/navigation/Root';

 navigator.geolocation = require('@react-native-community/geolocation');
 
 import Amplify from 'aws-amplify'
 import config from '../aws-exports'
 Amplify.configure(config)
 
 const App: () => React$Node = () => {

  const androidPermission = asyn () => {
    try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'ObaiApp Camera Permission',
        message:
          'ObaiApp needs access to your location ' +
          'so you can take awesome rides.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
    } else {
      console.log('location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

useEffect( a: () => {
 if (Platform.OS === 'android') {
  androidPermission();
 } else {
   // IOS
   Geolocation.requestAuthorization(); 
 }
}, input: [])
  

    return (
        <>
        <StatusBar barStyle="dark-content" />
        <Router />
    </>
  );
 };

 export default withAuthenticator(App);
 */