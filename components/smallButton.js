import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { travelStyles } from '../styles/styles';

export default function SmallButton({icon, text, back, onPress, style, color}){
    if (icon) {
        return(
            <>
                <TouchableOpacity onPress={onPress} style={ travelStyles.smallButton }>
                    <AntDesign 
                        style={{ color, textAlign: 'right', marginTop: 2 }} 
                        name={icon} 
                        size={24} 
                    />
                </TouchableOpacity>
            </>
        );
    } else if (text) {
        return(
            <>
                <TouchableOpacity onPress={onPress} style={ travelStyles.smallButton }>
                    <Text style={{ color: 'white', fontSize: 24, fontFamily:'monospace', marginTop: -4 }}>{text}</Text>
                </TouchableOpacity>
            </>
        );
    } else if (back) {
        return(
            <>
                <TouchableOpacity onPress={onPress} style={ travelStyles.smallButton }>
                    <Text style={{ color: 'white', fontSize: 28, fontFamily:'monospace', marginTop: -3, marginLeft: -4, }}>{back}</Text>
                </TouchableOpacity>
            </>
        );
    }
}