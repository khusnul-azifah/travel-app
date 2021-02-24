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
                    <View style={styles.carouselHeaderIndicator}></View>
                </View>
                <View style={styles.carouselBody}>
                    <Text style={styles.carouselData}>{data}</Text>
                    <View 
                        style={{ 
                            // justifyContent: 'center', 
                            // alignItems: 'center', 
                            // position: 'absolute',
                            bottom: 10,
                        }}
                    >
                        <TouchableOpacity style={styles.carouselButton}>
                            <LinearGradient 
                                style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 20, }} 
                                colors={['#121212','#121212']}
                            >
                                <Text style={{ color: 'white', fontSize: 16 }}>Book Now!</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
}