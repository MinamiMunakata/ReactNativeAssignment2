import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text>nav</Text>
        </View>
        <View style={styles.cardContainer}>
          <Text>Hi</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text>Buttons</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  navbar: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF00FF',
  },
  cardContainer: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00FFFF',
  },
  buttonContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFF00',
  },
})
