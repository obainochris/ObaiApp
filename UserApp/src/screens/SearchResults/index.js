import React, { useState } from 'react';
import {View, Dimensions} from "react-native";
import { API, graphqlOperation, Auth } from 'aws-amplify';
import RouteMap from "../../components/RouteMap";
import ObaiTypes from "../..components//ObaiTypes";
import { createOrder } from '../../graphql/mutations';

import { useRoute, useNavigation } from '@react-navigation/native';
import { useState } from "react";

const SearchResult = (_props) => {
    const typeState = useState(initialState, null);

    const route = useRoute();
    const navigation = useNavigation();

    const {originPlace, destinationPlace} = route.params
    
    const onSubmit = async () => {
        const [type] = typeState;
        if (!type) {
            return;
        }

        // submit to server  
        try {
            const userInfo = await Auth.currentAuthenticatedUser();

            const date = new Date();
      const input = {
        createdAt: date.toISOString(),
                type,
                originLatitude: originPlace.details.geometry.location.lat,
                originLongitude:originPlace.details.geometry.location.lng,

                destLatitude: destinationPlace.details.geometry.location.lat,
                destLongitude: destinationPlace.details.geometry.location.lng,

                userId: userInfo.Attributes.sub,
                carId: "1",
            }

            const response = await API.grapgql(
                graphqlOperation(
                    createOrder, variables, {
                        input: input
                    }
                )
            )
            console,log(response);
            navigation.navigate('OrderPage', { id: response.data.createOrder.id });
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <View style={{display: 'flex', justifyContent: 'space-between'}}>
            <View style={{height: Dimensions.get('window').height-400}}>
            <RouteMap origin={originPlace} destination={destinationPlace} />

            </View>
            <View style={{height: 400}}>
        <ObaiTypes typeState= {typeState} onSubmit={onSubmit} />
        </View>
        </View>

    );
};
export default SearchResult;