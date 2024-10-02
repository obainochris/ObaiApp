import React from "react";
import { Image } from "react-native"
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const OrderMap = ({ car }) => {

  const getImage = () => {
    if (type === 'ObaiX') {
        return require('../../assets/images/top-ObaiX.png');
    }
    if (type === 'Comfort') {
        return require('../../assets/images/top-Comfort.png');
    }
    if (type === 'ObaiXL') {
        return require('../../assets/images/top-ObaiXL.png');
    };
   }

    return (
        
        <MapView
          style={{width: '100%', height: '100%'}}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.222,
            longitudeDelta: 0.0121,
          }}
        >
            {car && (<Marker
            key={car.id}
            coordinate={{latitude: car.latitude, longitude: car.longitude }}
            >
              <Image
              style={{
                width: 70, 
                height: 50, 
                resizemode: 'contain',
                transform: [{
                  rotate: '${car.heading}deg'
                }]
              }}
            source={getImage(car.type)} 
            />
            </Marker>)}
        </MapView>
    );
};

export default OrderMap;
