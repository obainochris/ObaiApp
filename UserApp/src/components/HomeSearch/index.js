import React from 'react';
import {View, Text, Pressable } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation } from '@react-navigation/native';

import styles from './Styles';

const HomeSearch = (_props) => {
    const navigation = useNavigation();

    const goToSearch = () => {
        navigation.navigate('DestinationSearch')

    }

    return (
        <View >
        {/* Input Box */}
        <Pressable onPress={goToSearch} style={styles.inputBox}>
            <Text style={styles.inputText}>Where To?</Text>

            <view style={styles.TimeContainer}>
                <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
                <Text>Now</Text>
                <MaterialIcons name={'keyboard-arrow-down'} size={16} />
            </view>
        </Pressable>

        {/* Previous destination */}
        <View style={styles.row}>
            <view style={styles.iconContainer}>
                <AntDesign name={'clockcircle'} size={20} color={'#fffff'} />
            </view>
            <Text style={styles.destinationText}>Spin Nightclub</Text>
        </View>

        {/* Home destination */}
        <View style={styles.row}>
            <view style={(styles.iconContainer, {backgroundColor: '#218cff'})}>
                <Entypo name={'Home'} size={20} color={'#fffff'} />
            </view>
            <Text style={styles.destinationText}>Spin Nightclub</Text>
        </View>
        </View>
    );
};
export default Homesearch;