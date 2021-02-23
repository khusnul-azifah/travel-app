import React from 'react';
import { Animated, Text, Image, View, TouchableOpacity } from 'react-native';
import { travelStyles } from '../styles/styles';

export default function Card({image, title, location, description, onPress}){
    const alignment = new Animated.Value(400);

    return(
        <>
            <TouchableOpacity style={ travelStyles.card }>
                <Animated.View style={{ flexDirection: 'row'}}>
                    <View style={ travelStyles.cardImage }>
                        <Image style={{ width: '100%', height: '100%', borderRadius: 15 }} source={image}/>
                    </View>
                    <View style={{ flex: 0.7, marginHorizontal: 12, overflow: 'hidden' }}> 
                        <Text style={ travelStyles.cardTitle }>{title}</Text>
                        <Text style={ travelStyles.cardLocation }>{location}</Text>
                        <Text style={ travelStyles.cardDescription }>{description}</Text>
                    </View>
                </Animated.View>
            </TouchableOpacity>
        </>
    );
}