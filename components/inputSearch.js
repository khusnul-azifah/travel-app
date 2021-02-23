import React from 'react';
import { View, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { travelStyles } from '../styles/styles';

export default function InputSearch({placeholder, onChangeText}) {
    return(
        <>
            <View style={travelStyles.inputContainer}>
                <FontAwesome5 style={{
                        position: 'absolute',
                        left: 15,
                        top: 15,
                        color: '#aaa',
                    }}
                    name='search' size={18} />
                <TextInput placeholderTextColor='#aaa' placeholder={placeholder} style={travelStyles.input}></TextInput>
            </View>
        </>
    )
}