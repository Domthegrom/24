import React, { Component } from 'react'
import { StyleSheet, View, Text, Slider, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default class Registration extends Component {
  static navigationOptions = {
    title: 'filter'
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.locationContainer}>
            <Text style={styles.universalText}>location</Text>
            <Text>my current location</Text>
          </View>
          <View style={styles.locationSlider}>
            <Text
              style={{
                fontSize: 17,
                paddingVertical: '5%',
                paddingHorizontal: '7%'
              }}
            >
              maximum distance
            </Text>
            <Slider maximumValue={100} />
          </View>
          <View style={styles.locationContainer}>
            <Text style={styles.universalText}>gender</Text>
            <Text>women</Text>
          </View>
          <View style={styles.locationSlider}>
            <Text
              style={{
                fontSize: 17,
                paddingVertical: '5%',
                paddingHorizontal: '7%'
              }}
            >
              age range
            </Text>
            <Slider maximumValue={100} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: '50%'
  },
  cardContainer: {
    flex: 1,
    position: 'absolute',
    width: width - 20,
    height: height * 0.6,
    top: height * 0.1 / 2,
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'lightgrey'
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    paddingVertical: '5%',
    borderBottomWidth: 1,
    borderBottomColor: '#efeff4'
  },
  universalText: {
    fontSize: 17
  },
  locationSlider: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: '5%',
    borderBottomWidth: 1,
    borderBottomColor: '#efeff4',
    paddingHorizontal: '5%'
  }
})
