import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'

const inputHeight = (props) => {

    const styles = StyleSheet.create({
        inputContainer: {
            width: props.measure === 'meterInput' ? '85%' : '45%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#9FA1A2',
        },
        input: {
            fontSize: 32,
            fontFamily: props.font,
            width: '50%',
            alignSelf: 'center',
            textAlign: 'right',
            height: 32,
        },
        placeholder: {
            color: '#9FA1A2',
            fontSize: 16,
            fontFamily: props.placeholderFont,
            alignSelf: 'flex-end',
            marginLeft: 8,
            marginRight: '40%'
        }
    })

    return (
        <View style={styles.inputContainer}>
            <TextInput
                value={props.value}
                style={styles.input}
                onChangeText={(text) => props.onChange(props.measure, text)}
                keyboardType='numeric'
            />
            <Text style={styles.placeholder}>{props.placeholder}</Text>
        </View>
    )
}

export default inputHeight