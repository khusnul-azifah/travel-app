import React, { Component } from 'react';
import { View, Animated, Dimensions, ImageBackground, Easing, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../styles/details';
import SmallButton from '../components/smallButton';
import CarouselCard from '../components/carouselCard';

const { width, height } = Dimensions.get('screen');

export default class Details extends Component {
    state = {
        data: {},
        liked: false,
        alignment: new Animated.Value(height),
    };

    setInitialState = () => this.setState({ data: this.props.route.params.card });

    animateAlignment = () => Animated.timing(this.state.alignment, {
        toValue: height / 2,
        duration: 1500,
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
                <View style={{ height: height / 1.1 }}>
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <View style={styles.carousel}>
                        <CarouselCard 
                            header="Reservation Information" 
                            data={this.state.data.reservationInfo}
                        />
                        <CarouselCard 
                            header="Description" 
                            data={this.state.data.detailedDescription}
                        />
                        <CarouselCard 
                            header="Information" 
                            data={this.state.data.description}
                        />
                        <View 
                            style={{ 
                                bottom: 10,
                            }}
                        >
                            <TouchableOpacity style={styles.carouselButton}>
                                <LinearGradient 
                                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 20, }} 
                                    colors={['#db5d14','#db5d14']}
                                >
                                    <Text style={{ color: 'white', fontSize: 16 }}>Book Now!</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                </View>
            </View>
        );
    }
}

