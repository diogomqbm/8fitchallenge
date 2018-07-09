import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Font } from 'expo'
import { Header } from 'react-navigation'

export const loadFont = async () => {
    await Font.loadAsync({
        'fira-medium': require('../Assets/fonts/FiraSans-Medium.ttf'),
        'fira-bold': require('../Assets/fonts/FiraSans-Bold.ttf'),
    })
}

export const createAgeEntry = (AgeEntry) => {
    return class AgeEntryPage extends Component {

        state = {
            age: '',
            clickable: false,
            fontLoaded: false,
        }


        async componentDidMount() {
            await loadFont()
            this.setState({ fontLoaded: true })
        }


        changeAge = (age) => {
            this.setState({ age })
            this.checkAge(age)
        }

        checkAge = (age) => {
            if (age >= 13 && age <= 120) {
                this.setState({ clickable: true })
            } else {
                this.setState({ clickable: false })
            }
        }

        nextStep = () => {
            const params = this.props.navigation.state.params
            this.props.navigation.navigate('EntryHeight', {
                goal: params.goal,
                age: this.state.age,
                firaBold: params.firaBold,
                firaMedium: params.firaMedium,
                firaRegular: params.firaRegular
            })

        }

        render() {
            styles = StyleSheet.create({
                container: {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    backgroundColor: '#fff'
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
                    fontFamily: this.props.navigation.state.params.firaMedium,
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
                componentContainer: {
                    marginBottom: '40%'
                },
                fullProgressBar: {
                    height: 3,
                    backgroundColor: '#3CDF9C',
                    width: '100%'
                }


            })
            return (
                <View style={styles.container}>
                    {
                        this.state.fontLoaded ? (
                            <View style={styles.body}>
                                <View style={styles.progressBar} />
                                <AgeEntry
                                    age={this.state.age}
                                    font={this.props.navigation.state.params.firaBold}
                                    clickable={this.state.clickable}
                                    onChange={this.changeAge}
                                />
                                <KeyboardAvoidingView style={styles.buttonContainer} behavior="position" keyboardVerticalOffset={Header.HEIGHT} enabled>
                                    <TouchableOpacity style={[this.state.clickable ? styles.clickableButton : styles.nonClickableButton, styles.button]} onPress={() => this.nextStep()} disabled={!this.state.clickable}>
                                        <Text style={styles.buttonText}>Continue</Text>
                                    </TouchableOpacity>
                                </KeyboardAvoidingView>
                            </View>
                        ) : null
                    }
                </View>
            )
        }
    }
}

