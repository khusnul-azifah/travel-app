import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/details';
import { LinearGradient } from 'expo-linear-gradient';

export default function CarouselCard({header, data, onPress}) {
    return(
        <>
            <View style={styles.carouselCard}>
                <View style={styles.carouselHeader}>
                    <Text style={styles.carouselHeaderText}>{header}</Text>
                </View>
                <View style={styles.carouselBody}>
                    <Text style={styles.carouselData}>{data}</Text>
                </View>
            </View>
        </>
    );
}