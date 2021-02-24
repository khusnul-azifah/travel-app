import React, { Component } from 'react';
import { View, Animated, Dimensions, ImageBackground, Easing, Text, ScrollView } from 'react-native';
import { styles } from '../styles/details';
import SmallButton from '../components/smallButton';
import CarouselCard from '../components/carouselCard';

const { width, height } = Dimensions.get('window');

export default class Details extends Component {
    state = {
        data: {},
        // data: [
        //     {
        //         id: 1,
        //         image: require('../assets/images/the-seychelles.jpg'),
        //         title: 'Treasure Island', 
        //         location: 'Indian Ocean', 
        //         description: 'Her beauty is unrivaled and her fame, unwavering.',
        //         detailedDescription: 'Mother Nature was unbelievably generous with the Seychelles, a fabled paradise whose islands lie scattered across the Indian Ocean.',
        //     },
        //     {
        //         id: 2,
        //         image: require('../assets/images/glacier.jpg'),
        //         title: 'Like Heaven',
        //         location: 'US County in Montana', 
        //         description: 'Her beauty is unrivaled and her fame, unwavering.',
        //         detailedDescription: 'With over 700 miles of trails, Glacier is a hikers paradise for adventurous visitors seeking wilderness and solitude.',
        //     },
        //     {
        //         id: 3,
        //         image: require('../assets/images/bora-bora.jpg'),
        //         title: 'Sweet Paradise', 
        //         location: 'Leeward Islands', 
        //         description: 'Her beauty is unrivaled and her fame, unwavering.', 
        //         detailedDescription: 'Undoubtedly the most celebrated island in the South Pacific, Bora Bora is French Polynesias leading lady. Her beauty is unrivaled and her fame, unwavering.',
        //     },
        //     {
        //         id: 4,
        //         image: require('../assets/images/tokyo.jpg'),
        //         title: 'Paradise On Earth', 
        //         location: 'Tokyo, Japan', 
        //         description: 'Her beauty is unrivaled and her fame, unwavering.', 
        //         detailedDescription: 'Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods.',
        //     },
        // ],
        liked: false,
        alignment: new Animated.Value(height),
    };

    setInitialState = () => this.setState({ data: this.props.route.params.card });

    animateAlignment = () => Animated.timing(this.state.alignment, {
        toValue: height / 1.7,
        duration: 800,
        easing: Easing.back(),
        useNativeDriver: false,
    }).start();

    initializeUI = async () => {
        await this.setInitialState();
        this.animateAlignment();
    }

    componentDidMount() {
        this.initializeUI();
    }

    render(){
        const AnimatedBackground = {
            height: this.state.alignment,
        };

        return(
            <View>
                <Animated.View style={AnimatedBackground}>
                    <ImageBackground 
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        source={
                            this.state.data.image 
                            ? this.state.data.image 
                            : require('../assets/images/bora-bora.jpg')
                        }
                    >
                        <View 
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                backgroundColor: 'rgba(0,0,0,0.5)',
                            }}
                        >
                            <View style={{ flexDirection: 'row', marginTop: 40 }}>
                                <View style={{ flex: 0.9, justifyContent: 'flex-start', marginLeft: 20 }}>
                                    <SmallButton 
                                        text='x'
                                        onPress={() => this.props.navigation.navigate('Luxury')}
                                    />
                                </View>
                                <View 
                                    style={{ 
                                        flex: 0.2, 
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <SmallButton 
                                        icon={this.state.liked ? 'heart' : 'hearto'} 
                                        color={this.state.liked ? '#a81f11' : 'white'}
                                        onPress={() => this.setState({liked: !this.state.liked})}
                                    />
                                </View>
                            </View>
                            <View style={styles.textView}>
                                <Text style={styles.title}>{this.state.data.title}</Text>
                                <Text style={styles.location}>{this.state.data.location}</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </Animated.View>
                <View style={styles.carousel}>
                    <ScrollView 
                        horizontal={true} 
                        showsHorizontalScrollIndicator={false} 
                        scrollEventThrottle={1500}
                        contentOffset={{ x:0 }}
                        pagingEnabled={true}
                    >
                        <CarouselCard 
                            header="Reservation Information" 
                            data={this.state.data.paymentInfo}
                        />
                        <CarouselCard 
                            header="Description" 
                            data={this.state.data.detailedDescripton}
                        />
                        <CarouselCard 
                            header="Information" 
                            data={this.state.data.descripton}
                        />
                    </ScrollView>
                </View>
            </View>
        );
    }
}

