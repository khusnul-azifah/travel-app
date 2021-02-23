import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('screen');

export const travelStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 42,
        fontWeight: 'bold',
        paddingLeft: 15
    },

    headerImage: {
        width: 60,
        height: 60,
        borderRadius: 50
    },

    inputContainer: {
        backgroundColor: '#ffffff',
        width: width / 1.15,
        padding: 8,
        marginTop: 15,
        borderRadius: 20,

        shadowColor: '#0000',
        shadowOffset: {
            width: 1.5,
            height: 1.5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 1.3
    },

    input: {
        color: '#000',
        marginLeft: 40,
        padding: 2,
        fontSize: 16,
    },

    imageContainer: {
        flexDirection: 'row',
        marginTop: 25,
    },

    imageView: {
        width: width / 2.5,
        height: height / 3.5,
        marginHorizontal: 10,
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },

    imageButton: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '30%',
        position: 'absolute',
        paddingTop: 5,
        bottom: 0,
        left: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },

    description: {
        fontSize: 13,
        marginVertical: 2,
        color: 'white',
        textAlign: 'center',
    },

    card: {
        marginVertical: 7,
        backgroundColor: '#fff',
        paddingVertical: 7,
        paddingHorizontal: 7,
        width: width / 1.1,
        marginHorizontal: 20,
        borderRadius: 20,

        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 1.5,
    },

    cardTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 10,
    },

    cardLocation: {
        fontSize: 11,
        color: '#777',
        marginLeft: 10,
    },

    cardDescription: {
        fontSize: 13,
        marginVertical: 5,
        marginLeft: 10,
    },

    cardImage: {
        padding: 2,
        flex: 0.3,
    },

});