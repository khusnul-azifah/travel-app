import React, { Component } from 'react';
import { Animated, SafeAreaView, StyleSheet, Text, View, Image, Dimensions, Easing } from 'react-native';
import { travelStyles } from '../styles/styles';
import InputSearch from '../components/inputSearch';
import ImageButton from '../components/imageButton';

const { width, height } = Dimensions.get('screen');

export default class MainScreen extends Component {
    state={
        alignment: new Animated.Value(200),
    };

    componentDidMount(){
        this.AnimateHeader();
    }

    AnimateHeader = () => {
        Animated.timing(this.state.alignment, {
            toValue: 150,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    };
    render(){

        const AnimatedHeader = {
            height: this.state.alignment,
        };

        return (
            <View>
                <Animated.View style={[travelStyles.header, AnimatedHeader]}>
                    <View style={{ flex: 0.6, paddingTop: 50 }}>
                        <Text style={travelStyles.headerText}>Find your next trip!</Text>
                    </View>
                    <View style={{ flex: 0.3, paddingTop: 60, alignItems: 'flex-end' }}>
                        <Image 
                            source={require('../assets/images/profile-picture.jpg')}
                            style={travelStyles.headerImage} 
                        />
                    </View>
                </Animated.View>
                <View style={{ alignItems:'center' }}>
                    <InputSearch placeholder='Search' />
                </View>
                <View style={{ alignItems:'center' }}>
                    <View style={travelStyles.imageContainer}>
                        <View style={travelStyles.imageView}>
                            <Image source={require('../assets/images/bora-bora.jpg')} style={travelStyles.image} />
                            <View style={ travelStyles.imageButton }>
                                <ImageButton 
                                    onPress={() => this.props.navigation.navigate("Luxury")}
                                    title='Luxury' 
                                    description='Stunning Places'
                                />
                            </View>
                        </View>
                        <View style={travelStyles.imageView}>
                            <Image source={require('../assets/images/vernazza.jpg')} style={travelStyles.image} />
                            <View style={ travelStyles.imageButton }>
                                <ImageButton title='Family' description='Love Everywhere'/>
                            </View>
                        </View>
                    </View>
                    <View style={travelStyles.imageContainer}>
                        <View style={travelStyles.imageView}>
                            <Image source={require('../assets/images/machu-picchu.jpg')} style={travelStyles.image} />
                            <View style={ travelStyles.imageButton }>
                                <ImageButton title='Backpacking' description='Enjoy Every Moment'/>
                            </View>
                        </View>
                        <View style={travelStyles.imageView}>
                            <Image source={require('../assets/images/sarakiniko.jpg')} style={travelStyles.image} />
                            <View style={ travelStyles.imageButton }>
                                <ImageButton title='Trending' description='Just Go Now!'/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

