import React, { Component } from 'react'
import { StyleSheet, View, Text, Switch } from 'react-native'
// import Slider from "react-native-multislider";

export default class tshirt extends Component {
  static navigationOptions = {
    title: 't-shirt'
  }
  // state = {
  //   ageRangeValues: [18, 24],
  //   distanceValue: [5],
  // }
  render() {
    return (
      <View>
        <Text>Link to website</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
