import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    title: {
        fontSize: 33,
        color: 'white',
    },

    location: {
        fontSize: 18,
        color: '#aaa',
        marginLeft: 5,
    },
    
    textView: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },

    carousel: {
        marginVertical: 20,
        alignItems: 'center',
        height: height,
    },

    carouselCard: {
        marginVertical: 15,
        left: 0,
        width: width / 1.2,
    },

    carouselHeader: {
        justifyContent: 'flex-start',
    },

    carouselHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        justifyContent: 'flex-start',
    },

    carouselHeaderIndicator: {
        marginVertical: 20,
        backgroundColor: '#c4c4c4',
        width: 70,
        height: 3,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    carouselBody: {
        padding: 0,
    },

    carouselData: {
        marginVertical: 8,
        textAlign: 'justify',
        fontSize: 14,
        color: '#333',
    },

    carouselButton: {
        width: width / 1.3,
        height: 50,
        bottom: -40,
        justifyContent: 'center',
        alignItems: 'center',
    },

});