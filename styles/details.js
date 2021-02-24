import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

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
        justifyContent: 'center',
        alignItems: 'center',
    },

    carouselCard: {
        left: 0,
        marginHorizontal: 50,
        width: width / 1.4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    carouselHeader: {
        alignItems: 'center',
    },

    carouselHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
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
        padding: 20,
    },

    carouselData: {
        textAlign: 'justify',
        fontSize: 16,
    },

    carouselButton: {
        width: width / 2.5,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

});