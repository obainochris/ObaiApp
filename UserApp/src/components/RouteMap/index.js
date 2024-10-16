import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const GOOGLE_MAPS_APIKEY= 'AIzaSyCIVGEbZDehwwNwIq9dc7OFyMyrdjXfuOw'

const RouteMap = ({origin, destination}) => {

    const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
};

    const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
    };
   
    return (
        
        <MapView
          style={{width: '100%', height: '100%'}}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          initialRegion={{
            latitude: 28.450627,
            longitude: -16.263845,
            latitudeDelta: 0.222,
            longitudeDelta: 0.0121,
          }}>
            <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
       <Marker
        coordinate={origin}
        title={'Origin'}
      />
      <Marker
        coordinate={destination}
        title={"Destination"}
      />
        </MapView>
    );
        };


export default RouteMap;
