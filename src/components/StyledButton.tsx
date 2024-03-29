import {useRef} from 'react';
import { StyleSheet, Text,  Pressable, Animated} from 'react-native';


const StyledButton = props => {

    const expand = useRef(new Animated.Value(0)).current;

    const expand_Up = () => {
        Animated.spring(expand, {
            toValue: 5,
            useNativeDriver: true,
        }).start();
    };
    const expand_Down = () => {
        Animated.spring(expand, {
            toValue: -5,
            bounciness: 12,
            useNativeDriver: true,
        }).start();
    };

    const animate_button = () => {
        expand_Up;
        expand_Down;
    }


    return(
        <Animated.View
            style={[styles.container,
                {
                    transform:[{translateY:expand}]
                }
            ]}
        >
            <Pressable
                onPressIn={expand_Up}
                onPressOut={expand_Down}
                style={styles.button1}
                onPress={ props.onPress}
                disabled={props.disabled}
            >
                <Text style={{
                    alignItems: 'center',
                    fontFamily: 'OpenSans_600SemiBold',
                    fontSize:16, color: '#ffffff'
                }}>{props.title}</Text>
            </Pressable>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        // backgroundColor: Colors.test2
    },
    button1: {
        paddingVertical: "5.4%",
        borderRadius: 35,
        backgroundColor: '#431cf3',
        alignItems :'center',
        justifyContent : 'center',

    }
})

export default StyledButton;