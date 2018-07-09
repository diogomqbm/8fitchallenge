import React, { Component } from 'react'
import { Animated, View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import Card from '../Components/Card'
import { Font } from 'expo'


class LandingScreen extends Component {
    
    state = {
        fontLoaded: false,
        animatedVal: new Animated.Value(-175),
        textMovementAnimation: new Animated.Value(-30),
        textFadeAnimation: new Animated.Value(0),
        logoWidthAnimation: new Animated.Value(44),
        logoHeightAnimation: new Animated.Value(88),
        logoMovementAnimation: new Animated.Value(-165),
        logoFadeInAnimation: new Animated.Value(0),
        cardsAnimation: new Animated.Value(0),
    }
    
    goals = [
        {
            id: 0,
            type: 'lose_weight',
            title: 'Lose weight',
            subtitle: 'Burn fat & get lean'
        },
        {
            id: 1,
            type: 'get_fitter',
            title: 'Get fitter',
            subtitle: 'Tone up & feel healthy'
        },
        {
            id: 2,
            type: 'gain_muscle',
            title: 'Gain muscle',
            subtitle: 'Build mass & strength'
        },
    ]

    async componentDidMount() {
        await Font.loadAsync({
            'fira-medium': require('../Assets/fonts/FiraSans-Medium.ttf'),
            'fira-bold': require('../Assets/fonts/FiraSans-Bold.ttf'),
            'fira-regular': require('../Assets/fonts/FiraSans-Regular.ttf')
        })
        this.setState({ fontLoaded: true })
        this.animation()
    }

    animation = () => {
        const logoInitialFadeIn = 
            Animated.timing(
                this.state.logoFadeInAnimation,
                {
                    toValue: 1,
                    duration: 1000
                }
            )

        const logoAnimation = Animated.parallel([
            Animated.timing(
                this.state.logoWidthAnimation,
                {
                    toValue: 22,
                    duration: 1000,
                }
            ),
            Animated.timing(
                this.state.logoHeightAnimation,
                {
                    toValue: 44,
                    duration: 1000,
                }
            ),
            Animated.decay(this.state.logoMovementAnimation, {
                velocity: 0.7,
                deceleration: 0.996,
            })
        ])
            
        const contentAnimation = Animated.parallel([
            Animated.timing(
                this.state.textFadeAnimation,
                {
                    toValue: 1,
                    duration: 300,
                }
            ),
            Animated.timing(
                this.state.textMovementAnimation,
                {
                    toValue: 1,
                    duration: 300
                }
            ),
            Animated.decay(this.state.animatedVal, {
                velocity: 0.5,
                deceleration: 0.997,
            }),
            Animated.timing(
                this.state.cardsAnimation,
                {
                    toValue: 1,
                    duration: 1000
                }
            )
        ])

        const animations = [logoInitialFadeIn, logoAnimation, contentAnimation]
        Animated.sequence(animations).start()
    }

    askAge = (goal) => {
        this.props.navigation.navigate('EntryAge', { 
            goal,
            firaBold: 'fira-bold',
            firaRegular: 'fira-regular',
            firaMedium: 'fira-medium'
         })
    }

        render() {
            let { animatedVal, cardsAnimation, textMovementAnimation, textFadeAnimation, logoFadeInAnimation, logoWidthAnimation, logoHeightAnimation, logoMovementAnimation } = this.state
            return (
                <ImageBackground source={require('../Assets/Images/backgroundGrain.png')} style={styles.container}>
                    {
                        this.state.fontLoaded ?
                        (
                            <View style={styles.mainView}>
                                <Animated.View style={[styles.animation, {left: animatedVal}]}>
                                    <ImageBackground source={require('../Assets/Images/imgBeans3x.png')} style={styles.leftImage}/>
                                </Animated.View>
                                <Animated.View style={[styles.animation, {right: animatedVal}]}>
                                    <ImageBackground source={require('../Assets/Images/imgMat.png')} style={styles.rightMat}/>
                                    <ImageBackground source={require('../Assets/Images/imgDumbbell.png')} style={styles.rightDumbbell}/>
                                </Animated.View>
                                <View style={styles.header}>
                                    <Animated.Image style={[styles.logo, {opacity: logoFadeInAnimation, width: logoWidthAnimation, height: logoHeightAnimation, bottom: logoMovementAnimation}]} source={require('../Assets/Images/icon8Logo.png')}/>
                                    <Animated.Text style={[styles.logoText, {bottom: textMovementAnimation, opacity: textFadeAnimation}]}>WELCOME TO 8FIT</Animated.Text>
                                    <Animated.Text style={[styles.bodyTitle, {bottom: textMovementAnimation, opacity: textFadeAnimation}]}>What's your goal?</Animated.Text>
                                </View>
                                <Animated.View style={[styles.body, {opacity: cardsAnimation}]}>
                                {
                                    this.goals.map(goal => (
                                        <View key={goal.type} style={[styles.cardView]}>
                                            <Card askAge={this.askAge} title={goal.title} subtitle={goal.subtitle} 
                                            titleFont={'fira-bold'} subtitleFont={'fira-regular'}/>
                                        </View>
                                    ))
                                }
                                </Animated.View>
                            </View>
                        )
                    : null
                }
            </ImageBackground>
            )
        }
    }

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        width: '100%',
        alignItems: 'stretch',
        flexDirection: 'column'
    },
    cardView: {
        width: '90%',
        height: 120,
        alignSelf: 'center',
        alignItems: 'flex-start',
        justifyContent:'center',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        width:'100%',
        height:'100%'
    },
    leftImage: {
        position:'absolute',
        left: 0,
        top: '17%',
        height: '80%',
        width: '50%'
    },
    animation: {
        position:'absolute',
        height: '100%',
        width: '100%'
    },
    rightDumbbell: {
        position:'absolute',
        right: 0,
        bottom: '7%',
        height: '35%',
        width: '30%'
    },
    rightMat: {
        position:'absolute',
        right: 0,
        bottom: '3%',
        height: '10%',
        width: '25%'
    },
    header:{
        marginTop: 70,
        alignSelf:'center',
        justifyContent:'center'
    },
    body: {
        flex: 0.8,
        marginTop: 30,
        alignSelf:'center',
        justifyContent:'flex-start',
        alignItems: 'stretch',
        flexDirection: 'column',
        width: '100%'
    },
    bodyTitle: {
        fontSize: 24,
        marginBottom: '2.25%',
        fontFamily: 'fira-bold',
        alignSelf: 'center'
    },
    logoText: {
        fontSize: 12,
        marginBottom: 20,
        fontFamily: 'fira-medium',
        alignSelf: 'center'
    },
    logo: {
        alignSelf:'center',
        width: 22,
        height: 44,
        marginBottom:'3.5%'
    }, 
    mat: {
        position:'absolute',
        width:'10%',
        height:'10%',
        right:0,
        bottom:0,
    }


})

export default LandingScreen