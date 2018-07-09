import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Header } from 'react-navigation'

export const createHeightEntry = (HeightEntry) => {
    return class HeightEntryPage extends Component {

        state = {
            meterInput: '',
            feetInput: '',
            inchesInput: '',
            measure: 'cm',
            clickable: false,
        }

        toggleMeasure = (measure) => {
            this.setState({ measure })
            if (measure === 'ft') {
                this.convertToFeet(this.state.meterInput)
            } else {
                this.convertToCentimeter(this.state.feetInput, this.state.inchesInput)
            }
        }

        changeHeight = (measure, height) => {
            this.setState({
                [measure]: height
            })
            if (measure === 'meterInput') this.checkHeight(height)
            else {
                this.convertToCentimeter(measure === 'feetInput' ? height : this.state.feetInput, measure === 'inchesInput' ? height : this.state.inchesInput)
            }
        }

        convertToFeet = (centimeter) => {
            if (centimeter) {
                const cmToInches = parseInt(centimeter) / 2.54
                const foot = Math.floor(cmToInches / 12)
                const inches = Math.floor(cmToInches % 12)
                this.setState({
                    feetInput: foot.toString(),
                    inchesInput: inches.toString()
                })
                this.checkHeight(centimeter)
            }
        }

        convertToCentimeter = (feet, inches) => {
            if (feet && inches) {
                const inchesToFeet = parseInt(inches) / 12
                const feetToCm = (parseInt(feet) + inchesToFeet) * 2.54 * 12
                this.setState({ meterInput: Math.ceil(feetToCm).toString() })
                this.checkHeight(Math.ceil(feetToCm))
            }
        }

        checkHeight = (height) => {
            if (height >= 125 && height <= 301) {
                this.setState({ clickable: true })
            } else {
                this.setState({ clickable: false })
            }


        }

        nextStep = () => {
            const params = this.props.navigation.state.params
            this.props.navigation.navigate('RecapScreen', {
                goal: params.goal,
                age: params.age,
                height: this.state.measure === 'ft' ? { feet: this.state.feetInput, inches: this.state.inchesInput } : this.state.meterInput,
                measure: this.state.measure,
                firaBold: params.firaBold,
                firaMedium: params.firaMedium,
                firaRegular: params.firaRegular
            })
        }

        render() {
            const params = this.props.navigation.state.params
            const styles = StyleSheet.create({
                container: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    backgroundColor: '#fff',
                },

                body: {
                    height: '100%',
                    width: '100%',
                },

                clickableButton: {
                    backgroundColor: '#25272A',
                },
                nonClickableButton: {
                    backgroundColor: '#9FA1A2',
                },
                buttonText: {
                    color: '#fff',
                    fontFamily: params.firaMedium,
                    fontSize: 16,
                },
                button: {
                    height: '100%',
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 140,
                },
                buttonContainer: {
                    marginBottom: '5%',
                    height: '10%',
                    width: '100%',
                    alignItems: 'center',
                },
                progressBar: {
                    height: 3,
                    backgroundColor: '#3CDF9C',
                    width: '75%'
                },
                fullProgressBar: {
                    height: 3,
                    backgroundColor: '#3CDF9C',
                    width: '100%'
                }


            })
            return (
                <View style={styles.container}>
                    <View style={styles.body}>
                        <View style={styles.fullProgressBar} />
                        <HeightEntry
                            meterValue={this.state.meterInput}
                            font={params.firaBold}
                            buttonFont={params.firaMedium}
                            onChange={this.changeHeight}
                            feetValue={this.state.feetInput}
                            inchesValue={this.state.inchesInput}
                            measure={this.state.measure}
                            toggleMeasure={this.toggleMeasure}
                            placeholderFont={params.firaRegular}
                        />
                        <KeyboardAvoidingView style={styles.buttonContainer} behavior="position" keyboardVerticalOffset={Header.HEIGHT} enabled>
                            <TouchableOpacity style={[this.state.clickable ? styles.clickableButton : styles.nonClickableButton, styles.button]} onPress={() => this.nextStep()} disabled={!this.state.clickable}>
                                <Text style={styles.buttonText}>Continue</Text>
                            </TouchableOpacity>
                        </KeyboardAvoidingView>
                    </View>
                </View>
            )
        }

    }
}

