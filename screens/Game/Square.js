import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';


function Square(props) {
    return (
        <View style={styles.square}
        >
            {props.value ? <Text>{props.value}</Text> : <Text onPress={props.handleClick}> Click </Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    square: {
        height: 80,
        width: 80,
        borderWidth: 1,
        borderColor: '#000',
        fontSize: 100,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
export default Square