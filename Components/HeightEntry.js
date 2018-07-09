import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import InputHeight from './InputHeight'

const buttonType = {
    feet: 'ft',
    centimeter: 'cm'
}

const placeholder = {
    feet: 'Ft',
    inches: 'In',
    centimeter: 'Cm',
}

const measure = {
    meter: 'meterInput',
    feet: 'feetInput',
    inches: 'inchesInput'
}

const HeightEntry = (props) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: '10%',
            width: '100%'
        },

        question: {
            fontSize: 24,
            width: '100%',
            textAlign: 'center',
            marginBottom: '15%',
            fontFamily: props.font
        },
        button: {
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 35,
            paddingRight: 35,
            borderColor: '#25272A',
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        label: {
            fontSize: 12,
            fontFamily: props.buttonFont
        },
        labelActive: {
            color: '#fff',
        },
        labelInactive: {
            color: '#25272A',
        },
        buttonActive: {
            backgroundColor: '#25272A'
        },
        buttonInactive: {
            backgroundColor: '#fff',
        },
        buttonRight: {
            borderBottomRightRadius: 50,
            borderTopRightRadius: 50
        },
        buttonLeft: {
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
        },
        buttonContainer: {
            flexDirection: 'row',
            height: 33,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30
        },

        feetHeightContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: '7%',
            marginRight: '7%'
        }


    })

    return (
        <View style={styles.container}>
            <Text style={styles.question}>How tall are you?</Text>
            {
                props.measure === buttonType.feet ? (
                    <View style={styles.feetHeightContainer}>
                        <InputHeight
                            value={props.feetValue}
                            onChange={props.onChange}
                            font={props.font}
                            placeholder={placeholder.feet}
                            placeholderFont={props.placeholderFont}
                            measure={measure.feet}
                        />
                        <InputHeight
                            value={props.inchesValue}
                            onChange={props.onChange}
                            font={props.font}
                            placeholder={placeholder.inches}
                            placeholderFont={props.placeholderFont}
                            measure={measure.inches}
                        />
                    </View>
                )
                    : (<InputHeight
                        value={props.meterValue}
                        font={props.font}
                        onChange={props.onChange}
                        placeholder={placeholder.centimeter}
                        placeholderFont={props.placeholderFont}
                        measure={measure.meter}
                    />
                    )
            }
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[props.measure === buttonType.feet ? styles.buttonActive : styles.buttonInactive, styles.button, styles.buttonLeft]} onPress={() => props.toggleMeasure(buttonType.feet)}>
                    <Text style={[props.measure === buttonType.feet ? styles.labelActive : styles.labelInactive, styles.label]}>FT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[props.measure === buttonType.centimeter ? styles.buttonActive : styles.buttonInactive, styles.button, styles.buttonRight]} onPress={() => props.toggleMeasure(buttonType.centimeter)}>
                    <Text style={[props.measure === buttonType.centimeter ? styles.labelActive : styles.labelInactive, styles.label]}>CM</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HeightEntry