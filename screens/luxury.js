import React, { Component } from 'react';
import { View, ImageBackground, Animated, Dimensions, Easing, Text, ScrollView, FlatList } from 'react-native';
import { travelStyles } from '../styles/styles';
import { styles } from '../styles/luxury';
import Card from '../components/card';

const { width, height } = Dimensions.get('screen');

export default class Luxury extends Component{
    state={
        alignment: new Animated.Value(height),
        cardAlignment: new Animated.Value(400),
        cards: [
            {
                image: require('../assets/images/the-seychelles.jpg'),
                title: 'Treasure Island', 
                location:'Indian Ocean', 
                description:'Her beauty is unrivaled and her fame, unwavering.',
            },
            {
                image: require('../assets/images/glacier.jpg'),
                title: 'Like Heaven',
                location: 'US County in Montana', 
                description: 'Her beauty is unrivaled and her fame, unwavering.',
            },
            {
                image: require('../assets/images/bora-bora.jpg'),
                title: 'Sweet Paradise', 
                location: 'Leeward Islands', 
                description: 'Her beauty is unrivaled and her fame, unwavering.', 
            },
            {
                image: require('../assets/images/tokyo.jpg'),
                title: 'Paradise On Earth', 
                location: 'Tokyo, Japan', 
                description: 'Her beauty is unrivaled and her fame, unwavering.', 
            },
        ],
    };

    AnimateUI = () => {
        Animated.sequence([
            Animated.timing(this.state.alignment, {
                toValue: height / 3,
                duration: 1500,
                easing: Easing.back(),
                useNativeDriver: false,
            }),
            Animated.timing(this.state.cardAlignment, {
                toValue: 0,
                duration: 1200,
                easing: Easing.ease,
                useNativeDriver: false,
            }),
        ]).start();
    };

    componentDidMount() {
        this.AnimateUI();
    }

    render(){
        const AnimatedBackground= {
            height: this.state.alignment,
        };

        const AnimatedCards= {
            transform: [
                {
                    translateX: this.state.cardAlignment,
                }
            ]
        };

        return(
            <View>
                <Animated.View style={[{ width: width }, AnimatedBackground]}>
                    <ImageBackground 
                        source={require('../assets/images/bora-bora.jpg')} 
                        style={ styles.backgroundImage}>
                        <View style={ styles.textView }>
                            <Text style={ styles.title }>Luxury</Text>
                            <Text style={ styles.description }>Stunning Places</Text>
                        </View>
                    </ImageBackground>
                </Animated.View>
                <Animated.View style={[styles.cardView, AnimatedCards ]}>
                    <FlatList data={this.state.cards} renderItem={({item}) => (
                        <ScrollView>
                            <Card 
                                image={item.image}
                                title={item.title} 
                                location={item.location} 
                                description={item.description}
                                onPress={() => this.handlePress(item.id)}
                            />
                        </ScrollView>
                    )} keyExtractor={(item, index) => index.toString()} />
                </Animated.View>
            </View>
        )
    }
}