import React from 'react';
import {View, Text, Pressable } from "react-native";
import styles from './styles.js';
import ObaiTypeRow from '../ObaiTypeRow';

import typesData from '../../assets/data/types';

const ObaiTypeRow = ({ typeState, onSubmit }) => {
    const [selectedType, setSelectedType] = typeState;
    
    return (
        <View>
            {typesData.map((type) => (
            <ObaiTypeRow 
            type={type} 
            key={type.id} 
            isSelected={type.type === selectedType}
            onPress={() => setSelectedType(type.type)}
            />
            ))}
        
        <Pressable onPress={onSubmit} style={{
            backgroundColor: 'black',
            padding: 10,
            margin: 10,
            alignItems: 'center' 
        }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
                Confirm Obai
            </Text>
        </Pressable>
        </View>

    );
};
export default ObaiTypes;