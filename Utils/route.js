import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import LandingScreen from '../Screens/LandingScreen'
import AgeEntryScreen from '../Screens/AgeEntryScreen'
import HeightEntryScreen from '../Screens/HeightEntryScreen'
import RecapScreen from '../Screens/RecapScreen'


const createRootNavigator = () => createStackNavigator({

    LandingScreen: {
        screen: LandingScreen,
        navigationOptions: {
            header: null
        }
    },
    EntryAge: {
        screen: AgeEntryScreen,
        navigationOptions: ({ navigation }) => ({
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={ require('../Assets/Images/icArrowLeft.png') }/>
                </TouchableOpacity>
            )
        })

    },
    EntryHeight: {
        screen: HeightEntryScreen,
        navigationOptions: ({ navigation }) => ({
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={ require('../Assets/Images/icArrowLeft.png') }/>
                </TouchableOpacity>
            )
        })

    },

    RecapScreen: {
        screen: RecapScreen,
        navigationOptions: {
            header: null,
        }

    },
    
    
})

export default createRootNavigator