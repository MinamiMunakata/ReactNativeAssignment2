import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import { Images, Profiles, Metrics } from './App/Themes'
import { Constants } from 'expo'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Icon name="rocket" size={30} color="#707070" />
          <Image source={Images.logo} style={styles.logo} />

          <Icon name="comments" size={30} color="#707070" />
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image source={Images.harold} />
            <View style={styles.info}>
              <Text style={styles.name_age}>
                <Text style={{ fontWeight: 'bold' }}>Harold,</Text>
                <Text>65</Text>
              </Text>
              <Text style={{ color: '#707070' }}>Internet meme</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button}>
            <Image source={Images.rewind} style={styles.icon} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Image source={Images.nope} style={styles.icon} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Image source={Images.boost} style={styles.icon} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Image source={Images.like} style={styles.icon} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Image source={Images.superLike} style={styles.icon} />
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  navbar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: Metrics.borderWidth,
    marginTop: Constants.statusBarHeight,
    width: Metrics.screenWidth,
  },
  logo: {
    resizeMode: 'contain',
    height: 30,
    width: 100,
  },
  cardContainer: {
    flex: 8,
    height: Metrics.screenHeight - 200,
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.screenWidth,
  },
  card: {
    backgroundColor: '#FFF',
    borderWidth: Metrics.borderWidth,
    borderBottomStartRadius: Metrics.buttonRadius,
    borderBottomEndRadius: Metrics.buttonRadius,
    borderColor: '#909090',
  },
  info: {
    margin: Metrics.baseMargin,
  },
  name_age: {
    fontSize: 25,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#FFF',
    margin: Metrics.marginHorizontal,
    borderRadius: 50 * 0.5,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    resizeMode: 'contain',
    margin: Metrics.baseMargin,
    height: 30,
    width: 30,
  },
})
