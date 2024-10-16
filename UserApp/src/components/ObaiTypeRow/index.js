import React from 'react';
import {View, Image, Text, Pressable} from "react-native"
import styles from './styles';

import Ionicons from "react-native-vector-Ionicons"

const ObaiTypeRow = (props) => {
   const {type, onClick, isSelected} = props;

   const getImage = () => {
    if (type.type === 'ObaiX') {
        return require('../../assets/images/ObaiX.jpeg');
    }
    if (type.type === 'Comfort') {
        return require('../../assets/images/Comfort.jpeg');
    }
    if (type.type === 'ObaiXL') {
        return require('../../assets/images/ObaiXL.jpeg');
    }
   }
    return (
        <Pressable onPress={onPress}
        style={[styles.container, {
            backgroundColor: isSelected ? '#efefef' : 'white',
        }]}
    >
        
        {/* Image */}
        <Image style={styles.Image} 
        source={getImage ()}
        />

        <view style={styles.middleContainer}>
            <Text style={styles.type}>
                {type.type}{' '}
                <Ionicons name={'person'} size={16} />
                3
            </Text>
            <Text style={styles.time}>
                8:03pm drop off
            </Text>

        </view>
        <view style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. ${type.price}</Text>
        </view>
        </Pressable>
    );
};

export default ObaiTypeRow;