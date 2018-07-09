import React from 'react'
import { ImageBackground, View, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native'

const RecapScreen = (props) => {
    const params = props.navigation.state.params
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        rightParsley: {
            position:'absolute',
            right: 0,
            top: '9%',
            height: '60%',
            width: '45%'
        },
        leftBeans: {
            position:'absolute',
            left: 0,
            bottom: 0,
            height: '40%',
            width: '40%'
        },
        buttonContainer: {
            marginBottom: '5%',
            height: '10%',
            width: '100%',
            alignItems: 'center',
        },
        button: {
            height: '100%',
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            width: 110,
            backgroundColor:'#25272A'
        },
        buttonText: {
            color: '#fff',
            fontFamily: params.firaMedium,
            fontSize: 16,
        },
        title: {
            fontSize: 24,
            width: '100%',
            textAlign: 'center',
            fontFamily: params.firaBold,
        },
        detailsText: {
            fontSize: 16,
            color: '#25272A',
            fontFamily: params.firaRegular,
        },
        detailsContentText: {
            fontSize: 16,
            color: '#9FA1A2',
            fontFamily: params.firaRegular
        },
        detailsContainer: {
            backgroundColor: '#fff',
            borderRadius: 7,
            width: Dimensions.get('window').width - 40,
            height: 180,
            borderColor: '#9FA1A2',
            borderWidth: 0.5,
            marginTop: 40
        },
        detailsContent: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:'center',
            paddingRight: 20,
            paddingTop: 20,
            paddingBottom: 20,
            marginLeft: 20
        },
        detailsContentNotLast: {
            borderBottomWidth: 0.5,
            borderBottomColor: 'rgba(159, 161, 162, 0.5)',
        },
        goBackArrow: {
            position: 'absolute',
            top: 32,
            left: 10,
        },
        body: {
            marginTop: '35%', 
            alignItems: 'center',           
        }
    })

    return (
        <ImageBackground source={require('../Assets/Images/backgroundGrain.png')} style={styles.container}>
            <TouchableOpacity style={styles.goBackArrow} onPress={() => props.navigation.goBack()}>
                    <Image source={ require('../Assets/Images/icArrowLeft.png') }/>
            </TouchableOpacity>
            <ImageBackground source={require('../Assets/Images/imgParsley3x.png')} style={styles.rightParsley}/>
            <ImageBackground source={require('../Assets/Images/imgBeans3x.png')} style={styles.leftBeans}/>
            <View style={styles.body}>
                <Text style={styles.title}>Confirm your details:</Text>
                <View style={styles.detailsContainer}>
                    <View style={[styles.detailsContent, styles.detailsContentNotLast]}>
                        <Text style={styles.detailsText}>Goal</Text> <Text style={styles.detailsContentText}>{params.goal}</Text>
                    </View>
                    <View style={[styles.detailsContent, styles.detailsContentNotLast]}>
                        <Text style={styles.detailsText}>Age</Text><Text style={styles.detailsContentText}>{params.age}</Text>
                    </View>
                    <View style={styles.detailsContent}>
                        <Text style={styles.detailsText}>Height</Text>
                    {
                        params.measure === 'ft' ? 
                        ( <Text style={styles.detailsContentText}>{params.height.feet} ft {params.height.inches} in</Text> )
                        : ( <Text style={styles.detailsContentText}>{params.height}cm</Text> )
                    }
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default RecapScreen