import React, {useEffect, useState} from 'react';
import {View, TextInput, SafeAreaView} from "react-native";
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import PlaceRow from './placeRow';

const Home = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const DestinationSearch = (props) => {

    const [originPlace, setoriginPlace] = useState( initialState, null);
    const [destinationPlace, setDestinationPlace] = useState(null);
    
    const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      })
    }
  }

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

    return (
        <SafeAreaView>
        <view style={styles.container}>
    
        <GooglePlacesAutocomplete
      placeholder="Where from?"
      onPress={(data, details = null) =>{
        setDestinationPlace( value, {data, details});
      }}
      enablePoweredByContainer={false}
      suppressDefaultStyles
      currentLocation={true}
      currentLocationLabel='current location'
      styles={{
        textInput: styles.textInput,
        container: styles.autocompleteContainer,
        listView: styles.listView,
        separator: styles.separator,
      }}
      fetchDetails
      query={{
        key: 'AIzaSyCIVGEbZDehwwNwIq9dc7OFyMyrdjXfuOw',
        language: 'en',
      }}
      renderRow={(data) => <PlaceRow data={data} />}
      renderDescription={(data) => data.description || data.vicinity}
      predefinedPlaces={[homePlace, workPlace]}
      />

       <GooglePlacesAutocomplete
      placeholder="Where to?"
      onPress={(data, details = null) =>{
        setDestinationPlace( value, {data, details});
      }}
      enablePoweredByContainer={false}
      suppressDefaultStyles
      styles={{
        textInput: styles.textInput,
        container: {...autocompleteContainer,
        top: 55,
      },
        separator: styles.separator
      }}
      fetchDetails
      query={{
        key: 'AIzaSyCIVGEbZDehwwNwIq9dc7OFyMyrdjXfuOw',
        language: 'en',
      }}
      renderRow={(data) => <PlaceRow data={data} />}
      />

      {/* Circle near Origin input */}
      <view style={styles.circle} />

      {/* Line between dots */}
      <view style={styles.line} />

      {/* Squre near Destination input */}
      <view style={styles.squre} />

      </view>
        </SafeAreaView>
      );
      };

export default DestinationSearch;