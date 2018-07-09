import React from 'react'
import { StyleSheet, View } from 'react-native'
import createRootNavigator from './Utils/route'

export default class App extends React.Component {
  render() {
    const Layout = createRootNavigator()
    return (
      <View style={styles.container}>
        <Layout/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
