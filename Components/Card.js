import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'

const Card = (props) => {

        return (
            <TouchableOpacity onPress={() => props.askAge(props.title)} style={styles.container}>
                <View style={styles.button}>
                    <Text style={[styles.title, { fontFamily: props.titleFont}]}>{props.title}</Text>
                    <Text style={[styles.subtitle, { fontFamily: props.subtitleFont}]}>{props.subtitle}</Text>
                </View>
                <ImageBackground source={require('../Assets/Images/chevronRight2x.png')} style={styles.chevronRight}>
                </ImageBackground>
            </TouchableOpacity>
        )
}


const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        width: '100%',
        justifyContent:'center',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowOffset:{  width: 0.3,  height: 4,  },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        marginBottom: 20
    },
    button: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 20
    },
    title: {
        fontSize:20,
        marginBottom: 10
    },
    subtitle: {
        fontSize:16
    },
    chevronRight: {
        position: 'absolute',
        width: 6,
        height: 12,
        right: 15,
        top: 44
    }
})


export default Card