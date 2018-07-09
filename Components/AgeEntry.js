import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const AgeEntry = (props) => {

    return (
        <View style={styles.container}>
            <Text style={[styles.question, { fontFamily: props.font }]}>How old are you?</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { fontFamily: props.font }]}
                    value={props.age}
                    keyboardType='numeric'
                    onChangeText={(text) => props.onChange(text)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '10%',
        width: '100%',
    },
    question: {
        fontSize: 24,
        width: '100%',
        textAlign: 'center',
        marginBottom: '15%'
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        fontSize: 32,
        width: '90%',
        borderBottomWidth: 0.6,
        borderBottomColor: '#9FA1A2',
        textAlign: 'center'
    }
})



export default AgeEntry