import React, { Component } from 'react';
import { View, ImageBackground, Animated, Dimensions, Easing, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import { travelStyles } from '../styles/styles';
import { styles } from '../styles/luxury';
import Card from '../components/card';

const { width, height } = Dimensions.get('window');

export default class Luxury extends Component{
    state={
        alignment: new Animated.Value(height),
        cardAlignment: new Animated.Value(400),
        cards: [
            {
                id: 1,
                image: require('../assets/images/the-seychelles.jpg'),
                title: 'Treasure Island', 
                location: 'Indian Ocean', 
                description: 'Her beauty is unrivaled and her fame, unwavering.',
                detailedDescription: 'Mother Nature was unbelievably generous with the Seychelles, a fabled paradise whose islands lie scattered across the Indian Ocean.',
            },
            {
                id: 2,
                image: require('../assets/images/glacier.jpg'),
                title: 'Like Heaven',
                location: 'US County in Montana', 
                description: 'Her beauty is unrivaled and her fame, unwavering.',
                detailedDescription: 'With over 700 miles of trails, Glacier is a hikers paradise for adventurous visitors seeking wilderness and solitude.',
            },
            {
                id: 3,
                image: require('../assets/images/bora-bora.jpg'),
                title: 'Sweet Paradise', 
                location: 'Leeward Islands', 
                description: 'Her beauty is unrivaled and her fame, unwavering.', 
                detailedDescription: 'Undoubtedly the most celebrated island in the South Pacific, Bora Bora is French Polynesias leading lady. Her beauty is unrivaled and her fame, unwavering.',
            },
            {
                id: 4,
                image: require('../assets/images/tokyo.jpg'),
                title: 'Paradise On Earth', 
                location: 'Tokyo, Japan', 
                description: 'Her beauty is unrivaled and her fame, unwavering.', 
                detailedDescription: 'Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods.',
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

    handlePress = (id) => {
        // Find item by id
        const card = this.state.cards.find((item) => item.id == id);

        // Navigate to Details screen with the card data
        this.props.navigation.navigate('Details', { card });
    };

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
        );
    }
}