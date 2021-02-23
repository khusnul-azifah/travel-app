import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { travelStyles } from '../styles/styles';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ImageButton({title, description, onPress}){
    return(
        <>
            <TouchableOpacity onPress={onPress} stye={travelStyles.ImageButton}>
                <Text style={travelStyles.title}>{title}</Text>
                <Text style={travelStyles.description}>{description}</Text>
            </TouchableOpacity>
        </>
    );
}