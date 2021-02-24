import React, { Component } from 'react';
import { View, Animated, Dimensions, ImageBackground, Easing } from 'react-native';
import SmallButton from '../components/smallButton';

const { width, height } = Dimensions.get('window');

export default class Details extends Component {
    state = {
        data: {},
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
                                    <SmallButton text='x'/>
                                </View>
                                <View 
                                    style={{ 
                                        flex: 0.2, 
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <SmallButton 
                                        icon={this.state.data.liked ? 'heart' : 'hearto' }
                                    />
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </Animated.View>
            </View>
        );
    }
}

